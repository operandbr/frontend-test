import Vue from 'vue';
import Router from 'vue-router';
import { Home } from '../pages';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../pages/list.page'),
    },
    {
      path: '/novo',
      name: 'novo',
      component: () => import('../pages/save.page'),
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../pages/save.page'),
    },
  ],
});
