// postStore.ts
import { defineStore } from 'pinia';

interface IPostState {
  foo: string;
}

export const usePostStore = defineStore('posts', {
  // state
  state: (): IPostState => ({
    foo: 'foo',
  }),
  // actions: to update the state
  actions: {
    updateFoo(foo: string) {
      this.foo = foo;
    },
  },
  getters: {},
});
