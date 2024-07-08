// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHw7rjeFQhJlDcJ1MuCG6pnU02_i29WYE",
  authDomain: "latamvisa-6e315.firebaseapp.com",
  projectId: "latamvisa-6e315",
  storageBucket: "latamvisa-6e315.appspot.com",
  messagingSenderId: "756274202160",
  appId: "1:756274202160:web:e8aeb1b66b2c11ecb6cff5",
  measurementId: "G-87FVBW9BP4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app)