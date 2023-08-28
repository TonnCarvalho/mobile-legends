import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/herois/',
    name: 'HeroisView',
    component: () => import('../views/HeroisView.vue'),
  },
  {
    path: '/heroi/:name',
    name: 'HeroiView',
    component: () => import('../views/HeroiView.vue')
  },
  {
    path: '/historia',
    name: 'HistoriaView',
    component: () => import('../views/HistoriaView.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
