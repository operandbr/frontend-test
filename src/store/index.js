import Vue from 'vue';
import Vuex from 'vuex';

/* Store */
import usuarioStore from './usuario';

Vue.use(Vuex);


const Store = new Vuex.Store({
  modules: {
    usuario: usuarioStore,
  },
  strict: true,
});


export default Store;
