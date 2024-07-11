import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home/index.vue'
import Apps from '@/views/apps/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps
    }
  ]
})

export default router
