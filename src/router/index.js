// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/Landing.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Dashboard from '@/components/Dashboard.vue'
import TicketManager from '@/components/TicketManager.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', component: TicketManager, meta: { requiresAuth: true } },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem('ticketapp_session')
  if (to.meta.requiresAuth && !isAuth) next('/login')
  else next()
})

export default router