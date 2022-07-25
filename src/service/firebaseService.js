import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDoc, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const getUserEntity = (fullName, userName, birthDate, cpf, phoneNumber) => {
  return {
    fullName: fullName,
    userName: userName,
    birthDate: birthDate,
    cpf: cpf,
    phoneNumber: phoneNumber
  }
}

const mapUserToList = (userCollection) => {
  const usersParsed = []
  userCollection.forEach(user => {
    usersParsed.push({ id: user.id, ...user.data() })
  })

  return usersParsed
}
const collectionName = 'users'
export default {
  findAllUsers: async () => {
    const alldata = await getDocs(collection(db, collectionName))
    return mapUserToList(alldata)
  },
  saveUser: async (fullName, userName, birthDate, cpf, phoneNumber) => {
    const user = getUserEntity(fullName, userName, birthDate, cpf, phoneNumber)
    const userCollection = collection(db, collectionName)
    const response = await addDoc(userCollection, user)
    return response
  },
  findUserById: async (fireId) => {
    const userRef = doc(db, collectionName, fireId)
    const user = await getDoc(userRef)
    if (user.exists()) {
      return user
    }
    return null
  },
  updateUser: async (fireId, fullName, userName, birthDate, cpf, phoneNumber) => {
    const user = getUserEntity(fullName, userName, birthDate, cpf, phoneNumber)
    const userRef = doc(db, collectionName, fireId)
    const response = await updateDoc(userRef, user)
    return response
  },
  deleteUSer: async (fireId) => {
    const userRef = doc(db, collectionName, fireId)
    const response = await deleteDoc(userRef)
    return response
  }
}
