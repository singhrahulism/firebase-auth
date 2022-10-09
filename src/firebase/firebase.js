// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4TgmnPytCY47iTVDsJ2e2JrnTDafmqUE",
  authDomain: "fir-auth-722cc.firebaseapp.com",
  projectId: "fir-auth-722cc",
  storageBucket: "fir-auth-722cc.appspot.com",
  messagingSenderId: "674720684835",
  appId: "1:674720684835:web:36888475c0bf4f698f8a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebaseAuth }