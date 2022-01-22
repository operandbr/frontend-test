import axios from 'axios'

const getUsers = async function ({ commit }) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .get(`http://localhost:8000/api/users`)
    .then((res) => {
      commit('SET_USERS', res.data)
      return res.data
    })
    .catch((e) => {})
    .finally(() => {
      this.dispatch('Spinner/setSpinner', false)
    })
}

const registerUser = async function ({ commit }, newData) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .post(`http://localhost:8000/api/user/register`, newData)
    .then((res) => {
      commit('SET_USERERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_USERERROR',
          `${e.response.status}: Algum campo foi deixado em branco.`
        )
      } else {
        commit(
          'SET_USERERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('User/getUsers')
      this.dispatch('Spinner/setSpinner', false)
    })
}

const updateUser = async function ({ commit }, data) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .patch(`http://localhost:8000/api/user/` + data.id, {
      name: data.name,
      email: data.email,
    })
    .then((res) => {
      commit('SET_USERERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_USERERROR',
          `${e.response.status}: Algum campo foi deixado em branco.`
        )
      } else {
        commit(
          'SET_USERERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('User/getUsers')
      this.dispatch('Spinner/setSpinner', false)
    })
}

const updatePassword = async function ({ commit }, data) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .patch(`http://localhost:8000/api/user/` + data.id, {
      password: data.password,
    })
    .then((res) => {
      commit('SET_USERERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_USERERROR',
          `${e.response.status}: Algum campo foi deixado em branco.`
        )
      } else {
        commit(
          'SET_USERERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('User/getUsers')
      this.dispatch('Spinner/setSpinner', false)
    })
}

const removeUser = async function ({ commit }, id) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .delete(`http://localhost:8000/api/user/` + id)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      commit(
        'SET_USERERROR',
        `${e.response.status}: ${e.response.data.message} Erro no servidor.`
      )
    })
    .finally(() => {
      this.dispatch('User/getUsers')
      this.dispatch('Spinner/setSpinner', false)
    })
}

const clearUsers = function ({ commit }) {
  commit('SET_USERS', null)
  commit('SET_USERERROR', null)
}

export default {
  getUsers,
  registerUser,
  updateUser,
  updatePassword,
  removeUser,
  clearUsers,
}
