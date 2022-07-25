import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      fullName: '',
      userName: '',
      cpf: '',
      birthDate: 'nbvgcxz',
      phoneNumber: ''
    }
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    clearUser ({ state }) {
      const userPropertys = Object.keys(state.user)
      userPropertys.forEach(property => {
        state.user[property] = ''
      })
    }
  },
  modules: {
  }
})
