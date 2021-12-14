import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as fb from '../firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { doc, addDoc } from 'firebase/firestore'

import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userProfile: {},
    isAuthenticated: false
  },
  mutations: {
    setUserProfile(state, val, authState) {
      state.isAuthenticated = !state.isAuthenticated
      state.userProfile = val

      console.log(state.userProfile)
      console.log(state.isAuthenticated)
    }
  },
  actions: {
    async register({ dispatch }, form) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          fb.auth,
          form.email,
          form.password
        )

        await addDoc(fb.usersCollection, {
          name: form.name,
          email: form.email
          // id: user.uid
        })

        dispatch('fetchUserProfile', user)
      } catch (error) {
        console.log(error.message)
      }
    },

    async login({ dispatch }, form) {
      try {
        const { user } = await signInWithEmailAndPassword(
          fb.auth,
          form.email,
          form.password
        )

        dispatch('fetchUserProfile', user)
      } catch (error) {
        console.log(error.message)
      }
    },

    async logout({ commit }) {
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/')
    },

    async fetchUserProfile({ commit }, user) {
      // const userProfile = await doc(fb.db, 'users', user.uid)
      const userProfile = fb.auth.currentUser

      console.log(userProfile)

      commit('setUserProfile', userProfile)

      router.push('/dashboard')
    }
  },
  modules: {}
})
