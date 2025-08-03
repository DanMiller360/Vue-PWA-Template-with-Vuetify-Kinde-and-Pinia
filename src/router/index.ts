import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from '@/components/pages/LandingPage.vue'
import WelcomePage from '@/components/pages/WelcomePage.vue'
import CallbackPage from '@/components/pages/CallbackPage.vue'
import AccountPage from '@/components/pages/AccountPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/welcome', name: 'WelcomePage', component: WelcomePage },
  { path: '/callback', name: 'CallbackPage', component: CallbackPage },
  { path: '/account', name: 'AccountPage', component: AccountPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router