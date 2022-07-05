export function REGISTRA(state, payload) {
  state.lista.push(payload);
}

export function ATUALIZA(state, payload) {
  state.lista = state.lista.map((usr) => {
    if (usr.id === payload.id) { return payload; }
    return usr;
  });
}

export function DELETA(state, id) {
  state.lista = state.lista.filter(usr => usr.id !== id);
}
