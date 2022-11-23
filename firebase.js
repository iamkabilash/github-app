// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqhAgGMH5XM1f56TsMNX2NCwD719qn1Vw",
  authDomain: "github-app-e9517.firebaseapp.com",
  projectId: "github-app-e9517",
  storageBucket: "github-app-e9517.appspot.com",
  messagingSenderId: "761466024356",
  appId: "1:761466024356:web:4d0fff40b2f6d9e9d45131",
  measurementId: "G-6CM9W3EMQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);