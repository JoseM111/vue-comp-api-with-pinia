// state.ts
import {
  IPost,
  thisMonth,
  thisWeek,
  TimeLinePostType,
  today,
} from '@/dummy_data/post';
import { PeriodType } from '@/stores/constants';
import { DateTime } from 'luxon';
import { defineStore } from 'pinia';

interface IPostState {
  ids: Array<string>;
  all: Map<string, IPost>;
  selectedPeriod: PeriodType;
}

export const usePostStore = defineStore('posts', {
  // state
  state: (): IPostState => ({
    ids: [today.id, thisWeek.id, thisMonth.id],
    all: new Map<string, IPost>([
      [today.id, today],
      [thisWeek.id, thisWeek],
      [thisMonth.id, thisMonth],
    ]),
    selectedPeriod: 'Today',
  }),
  // actions: to update the state
  actions: {
    setSelectedPeriod(period: PeriodType) {
      this.selectedPeriod = period;
    },
  },
  // works similarly to a computed property.
  // So a new state based on an existing state
  getters: {
    filteredPosts: (state): Array<TimeLinePostType> => {
      // mapping through the `ids` Array<string, IPost>
      return state.ids
        .map((id) => {
          const post = state.all.get(id);

          if (post) {
            return {
              ...post,
              created: DateTime.fromISO(post.created),
            };
          }

          throw Error(`Post with id ${id} not found`);
        })
        .filter((post) => {
          switch (state.selectedPeriod) {
            case 'Today':
              return post.created >= DateTime.now().minus({ day: 1 });
            case 'This Week':
              return (
                post.created >= DateTime.now().minus({ week: 1 })
              );
          }

          return post;
        });
    },
  },
});
