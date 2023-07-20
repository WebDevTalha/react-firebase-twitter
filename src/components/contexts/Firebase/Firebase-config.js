import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDLTpxtZ2or4S1OB-mgj_WB8AGiGBbykEE",
    authDomain: "react-firebase-twitter-33944.firebaseapp.com",
    projectId: "react-firebase-twitter-33944",
    storageBucket: "react-firebase-twitter-33944.appspot.com",
    messagingSenderId: "771192400466",
    appId: "1:771192400466:web:a107dcee9d2374a5bd4d8b",
}

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)
