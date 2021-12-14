import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBGHlk2W68pEeMFgxKY-bAD_QOtWl9hHS0',
  authDomain: 'vuejs-operand-test-spa.firebaseapp.com',
  projectId: 'vuejs-operand-test-spa',
  storageBucket: 'vuejs-operand-test-spa.appspot.com',
  messagingSenderId: '732508529878',
  appId: '1:732508529878:web:195f2e500183274fa9d577'
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export const usersCollection = collection(db, 'users')
