// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP3Kdb3joZJYXkDcuhDouC-EdgBPCGzb0",
  authDomain: "ayush-final-prototype.firebaseapp.com",
  databaseURL: "https://ayush-final-prototype-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ayush-final-prototype",
  storageBucket: "ayush-final-prototype.appspot.com",
  messagingSenderId: "330161894778",
  appId: "1:330161894778:web:d6a0ea62c2e13c94cb12c3",
  measurementId: "G-1LQY3VB0D3",
  databaseURL: "https://ayush-final-prototype-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);