// router.ts

import { createRouter, createWebHistory, Router } from 'vue-router';
import Home from '@/views/Home.vue';
import NewPost from '@/views/NewPost.vue';

const routePaths = [
  { path: '/', component: Home },
  { path: '/posts/new', component: NewPost },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routePaths,
});
