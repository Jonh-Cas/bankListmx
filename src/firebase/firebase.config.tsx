// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-WggusrZZGhg3mWntMgeM_AR4QfJqG8g",
  authDomain: "banklistmx.firebaseapp.com",
  projectId: "banklistmx",
  storageBucket: "banklistmx.appspot.com",
  messagingSenderId: "7642491225",
  appId: "1:7642491225:web:65982b4d62a2bc4759c448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;