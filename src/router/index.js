import { createRouter, createWebHistory } from 'vue-router'
import TemplateView from '../views/TemplateView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:HomeView
    },
    {
      path:'/template',
      component:TemplateView,
      props:{msg2:'반갑습니다'}
    }
  ],
})

export default router
