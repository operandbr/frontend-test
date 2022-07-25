import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user-registration',
    name: 'UserRegistration',
    component: () => import('../views/Form-user.vue')
  },
  {
    path: '/user-update',
    name: 'UserUpdate',
    component: () => import('../views/Form-user.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
