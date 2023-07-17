// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3XPWjEYITlXuRiCsojOhG7yGX6KhC8ok",
    authDomain: "rj-54821260-entrega-final.firebaseapp.com",
    projectId: "rj-54821260-entrega-final",
    storageBucket: "rj-54821260-entrega-final.appspot.com",
    messagingSenderId: "827169430707",
    appId: "1:827169430707:web:4ec6c1ce65192800b864c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider
