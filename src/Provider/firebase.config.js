// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHJ7FsDqcXbq2BqMxVIJ1z2hR7y-bPLs",
  authDomain: "tech-vibe.firebaseapp.com",
  projectId: "tech-vibe",
  storageBucket: "tech-vibe.appspot.com",
  messagingSenderId: "639683767355",
  appId: "1:639683767355:web:a5fb070aaa9ce17389001e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);