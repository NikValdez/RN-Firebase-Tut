// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2ha048pObMqM4nEYvhA4ERbiAZiZcCE",
  authDomain: "fb-database-dbd46.firebaseapp.com",
  projectId: "fb-database-dbd46",
  storageBucket: "fb-database-dbd46.appspot.com",
  messagingSenderId: "323368733154",
  appId: "1:323368733154:web:f3613269e9519c999291bb",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
