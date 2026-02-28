// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFO7ccVONU7BVhLCdsWkAi8QZCbFw7GGQ",
  authDomain: "pratimasecurityweb.firebaseapp.com",
  projectId: "pratimasecurityweb",
  storageBucket: "pratimasecurityweb.firebasestorage.app",
  messagingSenderId: "395759208966",
  appId: "1:395759208966:web:36327478e6349a836f1187",
  measurementId: "G-90LZDLEE56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);