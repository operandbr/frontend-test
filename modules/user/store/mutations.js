const SET_USERS = (state, obj) => {
  state.data = obj
}

const SET_REGISTERERROR = (state, obj) => {
  state.error.register = obj
}

const SET_UPDATEERROR = (state, obj) => {
  state.error.update = obj
}

const SET_REMOVEERROR = (state, obj) => {
  state.error.remove = obj
}

export default {
  SET_USERS,
  SET_REGISTERERROR,
  SET_UPDATEERROR,
  SET_REMOVEERROR,
}
