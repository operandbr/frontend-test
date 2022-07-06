import firebase from '../../boot/firebase';


const db = firebase.database().ref('usuario');

/**
 *
 * @param {*} context
 * @param {*} payload
 * @returns
 */
export function save(_, payload) {
  const usuario = payload;
  const { id } = usuario;
  if (id) {
    delete usuario.id;
    db.child(id).update(usuario);
  } else {
    db.push(usuario);
  }

  return usuario;
}

/**
 *
 * @param {*} context
 * @param {*} id
 * @returns
 */
export async function findById(_, id) {
  const snapshot = await db.child(id).once('value');

  if (snapshot.exists()) {
    const usuario = snapshot.val();
    usuario.id = snapshot.key;
    return usuario;
  }

  return {};
}


/**
 *
 * @param {*} context
 * @param {*} id
 * @returns
 */
export async function getAll() {
  let snapshot = await db.once('value');
  snapshot = snapshot.toJSON();
  return Object.keys(snapshot).map((key) => {
    const childKey = key;
    const childData = snapshot[key];
    childData.id = childKey;
    return childData;
  });
}

/**
 *
 * @param {*} context
 * @param {*} id
 */
export async function remove(_, id) {
  if (id) {
    return db.child(id).remove();
  }

  return false;
}

