import Vue from 'vue'
import Vuex from 'vuex'

import Spinner from '@/modules/spinner'
import User from '@/modules/user'

Vue.use(Vuex)

const modules = {
  Spinner,
  User,
}

export default () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    modules,
  })
