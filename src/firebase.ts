import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDEevd3DYydV_ZSWXpuUxN8HpCeZ75vvDc",
    authDomain: "madmultimedia-b57ba.firebaseapp.com",
    projectId: "madmultimedia-b57ba",
    storageBucket: "madmultimedia-b57ba.appspot.com",
    messagingSenderId: "787323476650",
    appId: "1:787323476650:web:fa0320d6bdb71d040d4ed3",
    measurementId: "G-LPHXBVG0ZC"
  };
firebase.default.initializeApp(firebaseConfig)

// utils
const db = firebase.default.firestore()
const auth = firebase.default.auth()

// collection references
const worksCollection = db.collection('works')

// export utils/refs
export {
  db,
  auth,
  worksCollection
}