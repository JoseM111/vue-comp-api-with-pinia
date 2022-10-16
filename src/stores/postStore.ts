// postStore.ts

import { reactive, readonly } from 'vue';

interface IPostState {
  foo: string;
}

export class PostStore {
  #state: IPostState;

  constructor() {
    this.#state = reactive<IPostState>({
      foo: 'foo',
    });
  }

  getState(): IPostState {
    // Can be updated reactively in the
    // dom but can not be mutated directly
    return readonly(this.#state);
  }

  updateFoo(foo: string) {
    this.#state.foo = foo;
  }
}

// store
const postStore = new PostStore();

// composables
export function usePostStore() {
  return postStore;
}
