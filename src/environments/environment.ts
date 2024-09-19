// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBSj8E9ARYXk84e2ptTY4rn_lnAm-hOE6s",
  authDomain: "projetam-fba8d.firebaseapp.com",
  projectId: "projetam-fba8d",
  storageBucket: "projetam-fba8d.appspot.com",
  messagingSenderId: "986794523985",
  appId: "1:986794523985:web:26cc7d68c35d74557f6770",
  measurementId: "G-LFFTSV7ZCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
