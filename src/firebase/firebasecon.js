// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAbP3DRENSAYl-E_bqN1yx_SIcVbxi1J8",
  authDomain: "firstproject-84f7e.firebaseapp.com",
  projectId: "firstproject-84f7e",
  storageBucket: "firstproject-84f7e.firebasestorage.app",
  messagingSenderId: "14448151842",
  appId: "1:14448151842:web:c7c57f86454ea378f3a97b",
  measurementId: "G-QFW47549C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
