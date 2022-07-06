/* Firebase */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/**
 * Informações temporárias que serão excluidas após um prazo determinado.
 */
const config = {
  apiKey: 'AIzaSyBZ92ZiNGBRw4MDvwbj1pj7unGeOYoE98E',
  authDomain: 'operand-kury.firebaseapp.com',
  databaseURL: 'https://operand-kury-default-rtdb.firebaseio.com',
  projectId: 'operand-kury',
  storageBucket: 'operand-kury.appspot.com',
  messagingSenderId: '703364654544',
  appId: '1:703364654544:web:77ee7966b7b5ede56a45d5',
};

firebase.initializeApp(config);

export default firebase;
