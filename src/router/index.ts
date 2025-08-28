import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from '@/components/pages/LandingPage.vue'
import HomePage from '@/components/pages/HomePage.vue'
import CallbackPage from '@/components/pages/CallbackPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/callback', name: 'CallbackPage', component: CallbackPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router