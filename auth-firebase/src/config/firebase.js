// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi_oO6d2RcTk2qjUusv5_4g8CUNqHVizQ",
  authDomain: "fir-todoapp-auth.firebaseapp.com",
  projectId: "fir-todoapp-auth",
  storageBucket: "fir-todoapp-auth.appspot.com",
  messagingSenderId: "312449509383",
  appId: "1:312449509383:web:5a8c204d569dc6a83322a2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db =getFirestore()
const auth = getAuth();
export{db,auth}