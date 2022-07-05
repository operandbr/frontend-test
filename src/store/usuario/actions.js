import { generateUUID } from '../../utils/general.utils';

/**
 *
 * @param {*} context
 * @param {*} payload
 * @returns
 */
export function save(context, payload) {
  const { id } = payload;
  if (id) {
    context.commit('ATUALIZA', payload);
    return;
  }
  const pokemon = payload;
  pokemon.id = generateUUID();
  context.commit('REGISTRA', payload);
}

/**
 *
 * @param {*} context
 * @param {*} id
 * @returns
 */
export function findById(context, id) {
  return context.state.lista.find(poke => poke.id === id);
}


/**
 *
 * @param {*} context
 * @param {*} id
 * @returns
 */
export function getAll(context) {
  return context.state.lista;
}

/**
 *
 * @param {*} context
 * @param {*} id
 */
export function remove(context, id) {
  if (id) {
    context.commit('DELETA', id);
  }
}

