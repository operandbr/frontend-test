const SET_USERS = (state, obj) => {
  state.users = obj
}

const SET_CURRENTUSER = (state, obj) => {
  state.currentUser = obj
}

const SET_USERERROR = (state, obj) => {
  state.error = obj
}

export default {
  SET_USERS,
  SET_CURRENTUSER,
  SET_USERERROR,
}
