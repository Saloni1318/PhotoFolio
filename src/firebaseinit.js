// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_zvLQmyMT27Ufeu8OrwADsP9AE3-q3w",
  authDomain: "photofholio-9460e.firebaseapp.com",
  projectId: "photofholio-9460e",
  storageBucket: "photofholio-9460e.firebasestorage.app",
  messagingSenderId: "100019501661",
  appId: "1:100019501661:web:1fe759269ffe825c4eebb4",
  measurementId: "G-T9FPNQ4REZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Named export for the database object
export { db };