import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteNameProvider, RoutePathProvider } from '@/assets/provider';
import HomeView from '@/views/HomeView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    name: RouteNameProvider.home,
    path: RoutePathProvider.home,
    component: HomeView
  },
  {
    name: RouteNameProvider.products,
    path: RoutePathProvider.products,
    component: () => import('@/views/productsView.vue')
  },
  {
    name: RouteNameProvider.customers,
    path: RoutePathProvider.customers,
    component: () => import('../views/customersView.vue'),
  },
  {
    name: RouteNameProvider.customer,
    path: `${RoutePathProvider.customer}/:forename/:surname`,
    component: () => import('../components/customerTile.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
