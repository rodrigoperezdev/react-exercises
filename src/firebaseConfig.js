// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLyZEz9uzmkyl6VRP9r2jsZT5JwSUnUK8",
  authDomain: "rpdev-react-exercises.firebaseapp.com",
  projectId: "rpdev-react-exercises",
  storageBucket: "rpdev-react-exercises.appspot.com",
  messagingSenderId: "951714135885",
  appId: "1:951714135885:web:efcb6e2fdf99c50fd84104",
  measurementId: "G-R5XFQFZG2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
