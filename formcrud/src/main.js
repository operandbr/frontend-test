import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstrapVue);

import Vuelidate from "vuelidate";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";


Vue.use(Vuelidate);

Vue.use(vuelidateErrorExtractor, { 
  template: templates.singleErrorExtractor.BootstrapVue, 
  messages: { 
    required: "The {attribute} field is required",
    email: "The {attribute} is invalid"
  }, 
  attributes: { 
    email: "Email",
    first_name: "First name",
    last_name: "Last name"
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
