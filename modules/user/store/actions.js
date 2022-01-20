import axios from 'axios'

const registerUser = async function ({ commit }, newData) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .post(`http://localhost:8000/api/user/register`, newData)
    .then((res) => {
      commit('SET_REGISTERERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_REGISTERERROR',
          `${e.response.status}: Alguns espaços foram deixados em Branco.`
        )
      } else {
        commit(
          'SET_REGISTERERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('Spinner/setSpinner', false)
    })
}

const updateUser = async function ({ commit }, data) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .patch(`http://localhost:8000/api/user/`, data.id, {
      name: data.newName,
      email: data.email,
      password: data.newPassword,
    })
    .then((res) => {
      commit('SET_UPDATEERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_UPDATEERROR',
          `${e.response.status}: Alguns espaços foram deixados em Branco.`
        )
      } else {
        commit(
          'SET_UPDATEERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('Spinner/setSpinner', false)
    })
}

const deleteUser = async function (id) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .delete(`http://localhost:8000/api/user/` + id)
    .then((res) => {
      return res.data
    })
    .catch((e) => {})
    .finally(() => {
      this.dispatch('Spinner/setSpinner', false)
    })
}

export default {
  registerUser,
  updateUser,
  deleteUser,
}
