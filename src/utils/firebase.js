// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCibJjMLRerI1otmG6OCIbQyzA049UhonE",
  authDomain: "netflixgpt-b7c1b.firebaseapp.com",
  projectId: "netflixgpt-b7c1b",
  storageBucket: "netflixgpt-b7c1b.appspot.com",
  messagingSenderId: "859696757222",
  appId: "1:859696757222:web:b359f4aef971fae2263e27",
  measurementId: "G-1X4ER29X5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();