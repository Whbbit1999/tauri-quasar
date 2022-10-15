import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
  },
] as RouteRecordRaw[];

export default routes;
