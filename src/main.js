import Vue from 'vue';
import Vuex from 'vuex';
import VueMask from 'v-mask';
import VueSweetalert2 from 'vue-sweetalert2';
import VueLoadingOverlay from 'vue-loading-overlay';

/* Dependencias de estilo  */
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.min.css';


import App from './App';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

/* Vuex */
Vue.use(Vuex);
Vue.use(VueLoadingOverlay);

Vue.use(VueMask);
Vue.use(VueSweetalert2);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() { },
});
