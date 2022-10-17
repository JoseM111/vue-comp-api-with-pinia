// postStore.ts
import { IPost, thisMonth, thisWeek, today } from '@/dummy_data/post';
import { defineStore } from 'pinia';

interface IPostState {
  ids: Array<string>;
  all: Map<string, IPost>;
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
  }),
  // actions: to update the state
  actions: {},
  getters: {},
});
