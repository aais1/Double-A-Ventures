// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-final-1db21.firebaseapp.com",
  projectId: "web-final-1db21",
  storageBucket: "web-final-1db21.appspot.com",
  messagingSenderId: "223916888633",
  appId: "1:223916888633:web:4bd8b92ef01fa4f6a5f3e8",
  measurementId: "G-TX0YKQ3J4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

export {auth,googleProvider,signInWithPopup}