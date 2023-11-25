// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfukMJxuJMUkXTK4QxWfXWL1YjfC0EZ8A",
  authDomain: "icare-ff3f4.firebaseapp.com",
  projectId: "icare-ff3f4",
  storageBucket: "icare-ff3f4.appspot.com",
  messagingSenderId: "679876157601",
  appId: "1:679876157601:web:8fda77c384e2ef8a8210e0",
  measurementId: "G-TRWC9BK9NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export {auth}