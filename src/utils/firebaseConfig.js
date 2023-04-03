import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider,getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyA5PNha1YmUeaeg23lGsiuWfP4A0cvFHYo",
    authDomain: "clone-bcc5f.firebaseapp.com",
    projectId: "clone-bcc5f",
    storageBucket: "clone-bcc5f.appspot.com",
    messagingSenderId: "269184521713",
    appId: "1:269184521713:web:be0a8feaf59db39bcd2050"
  }

const firebaseApp = initializeApp(firebaseConfig)


// Features for our app 
export const db = getFirestore()
export const auth = getAuth()
export const provider  = new GoogleAuthProvider();



