import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFO7ccVONU7BVhLCdsWkAi8QZCbFw7GGQ",
  authDomain: "pratimasecurityweb.firebaseapp.com",
  databaseURL: "https://pratimasecurityweb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pratimasecurityweb",
  storageBucket: "pratimasecurityweb.firebasestorage.app",
  messagingSenderId: "395759208966",
  appId: "1:395759208966:web:8dd33bb24385292a6f1187",
  measurementId: "G-6DB9E8MF1M"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

// Analytics (Server-side rendering check)
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAFO7ccVONU7BVhLCdsWkAi8QZCbFw7GGQ",
//   authDomain: "pratimasecurityweb.firebaseapp.com",
//   projectId: "pratimasecurityweb",
//   storageBucket: "pratimasecurityweb.firebasestorage.app",
//   messagingSenderId: "395759208966",
//   appId: "1:395759208966:web:36327478e6349a836f1187",
//   measurementId: "G-90LZDLEE56"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);