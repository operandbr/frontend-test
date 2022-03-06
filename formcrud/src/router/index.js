import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: Table
  },
  {
    path: '/signup',
    name: 'signup',
    component: Form
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
