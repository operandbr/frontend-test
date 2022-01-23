import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from '@/store/index.js';


Vue.config.productionTip = false

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')