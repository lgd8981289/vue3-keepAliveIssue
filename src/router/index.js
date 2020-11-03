import { createRouter, createWebHistory } from 'vue-router';
import One from '../components/One.vue';
import Two from '../components/Two.vue';

const routes = [
  {
    path: '/',
    name: 'One',
    component: One
  },
  {
    path: '/two',
    name: 'Two',
    component: Two
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
