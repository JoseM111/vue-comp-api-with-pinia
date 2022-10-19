// postStore.ts
import { IPost, TimeLinePostType } from '@/dummy_data/posts';
import { PeriodType } from '@/stores/constants';
import { DateTime } from 'luxon';
import { defineStore } from 'pinia';

interface IPostState {
  ids: Array<string>;
  all: Map<string, IPost>;
  selectedPeriod: PeriodType;
}

// utility function that simulates a server with some latency
function delaySimulation() {
  return new Promise<void>((res) => setTimeout(res, 1500));
}

export const usePostStore = defineStore('posts', {
  // state
  state: (): IPostState => ({
    ids: [],
    all: new Map<string, IPost>(),
    selectedPeriod: 'Today',
  }),
  // actions: to update the state
  actions: {
    /**
     * @fetchPosts
     * @param period
     */
    setSelectedPeriod(period: PeriodType): void {
      this.selectedPeriod = period;
    },
    /**
     * @fetchPosts
     */
    async fetchPosts(): Promise<void> {
      // fetching data
      const RESPONSE_URL: string = 'http://localhost:8000/posts';
      const response: Response = await window.fetch(RESPONSE_URL);

      // casting `as Array<IPost>` for type safety
      const data = (await response.json()) as Array<IPost>;
      // simulating a delay
      await delaySimulation();

      // processing our data
      let ids: Array<string> = [];
      let all: Map<string, IPost> = new Map();

      data.forEach((post: IPost) => {
        ids.push(post.id);
        all.set(post.id, post);
      });

      // mutations and updating
      this.ids = ids;
      this.all = all;
    },
    
    createNewPost(post: TimeLinePostType) {
      console.log("post created:", post);
    },
  },
  // works similarly to a computed property.
  // So a new state based on an existing state
  getters: {
    /**
     * @filteredPosts
     * @param state
     */
    filteredPosts: (state): Array<TimeLinePostType> => {
      // mapping through the `ids` Array<string, IPost>
      return state.ids
        .map((id) => {
          const post = state.all.get(id);
          
          // if true will return from this code block
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
