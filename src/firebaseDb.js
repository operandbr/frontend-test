import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBpqSjlP7ASawTxfHj8pDKg569FpOW6WWA',
  authDomain: 'vue-crud-operand.firebaseapp.com',
  projectId: 'vue-crud-operand',
  storageBucket: 'vue-crud-operand.appspot.com',
  messagingSenderId: '495419015713',
  appId: '1:495419015713:web:37d291ee19af8f0d0bd960',
  measurementId: 'G-MGSM5V1SDH'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
