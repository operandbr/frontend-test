// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMask from 'v-mask';


import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

/* Vuex */
Vue.use(Vuex);
Vue.use(VueMask);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() { },
});
