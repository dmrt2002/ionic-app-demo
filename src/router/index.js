import { createRouter, createWebHistory } from '@ionic/vue-router';
import memories from '../pages/memories.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component: memories
  },
  {
    path: '/memories/:id',
    component: () => import ('../pages/memorydetails.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../pages/addmemorypage.vue')
  },
  {
    path: '/memories/passwordset',
    component: () => import('../pages/passwordset.vue')
  },
  {
    path: '/memories/enterpassword',
    component: () => import('../pages/enterpassword.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
