// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiERzrXGFpOwov40vN7LvcfRZRjWmyd6o",
  authDomain: "todo-app-9bdb3.firebaseapp.com",
  projectId: "todo-app-9bdb3",
  storageBucket: "todo-app-9bdb3.appspot.com",
  messagingSenderId: "772638839393",
  appId: "1:772638839393:web:eb71662540ea1e7f4d9020",
  measurementId: "G-R0XFKB0JWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db}