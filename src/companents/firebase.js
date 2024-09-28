// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87HJTd_qfcaQ1qH78_rQtFqRPosyODlQ",
  authDomain: "delizi2.firebaseapp.com",
  projectId: "delizi2",
  storageBucket: "delizi2.appspot.com",
  messagingSenderId: "1052978533355",
  appId: "1:1052978533355:web:dfba784892226131f17fae",
  measurementId: "G-Q93MKNZZ9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GithubAuthProvider, signInWithPopup };
