// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCREl1MWnTp5HIqAFxmnukI5M3KItQkezw",
  authDomain: "netflixgpt-d5e0d.firebaseapp.com",
  projectId: "netflixgpt-d5e0d",
  storageBucket: "netflixgpt-d5e0d.appspot.com",
  messagingSenderId: "240975353160",
  appId: "1:240975353160:web:14278c69f691dd03278f7d",
  measurementId: "G-NVK5Z9S9WC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();