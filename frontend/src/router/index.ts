import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteNameProvider, RoutePathProvider } from '@/provider';
import HomeView from '@/views/HomeView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePathProvider.home,
    name: RouteNameProvider.home,
    component: HomeView
  },
  {
    path: RoutePathProvider.products,
    name: RouteNameProvider.products,
    component: () => import('../views/AboutView.vue')
  },
  {
    path: RoutePathProvider.customers,
    name: RouteNameProvider.customers,
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
