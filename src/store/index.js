import Vuex from 'vuex';


/*
  Stores
*/
import usuarioStore from './usuario';


const Store = new Vuex.Store({
  modules: {
    usuario: usuarioStore,
  },
  strict: true,
});


export default Store;
