// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJSGURcXjUXMWRBOp6LEnwHnLe3FWteEA",
  authDomain: "react-exercises-rpdev.firebaseapp.com",
  projectId: "react-exercises-rpdev",
  storageBucket: "react-exercises-rpdev.appspot.com",
  messagingSenderId: "676448860681",
  appId: "1:676448860681:web:b4de2a16abad1502d216d8",
  measurementId: "G-FRQVBQP3YZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
