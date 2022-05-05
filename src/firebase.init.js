// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWGgUpHTuoZREuwdqrBfRvxhODrZrADZA",
  authDomain: "super-car-warehouse.firebaseapp.com",
  projectId: "super-car-warehouse",
  storageBucket: "super-car-warehouse.appspot.com",
  messagingSenderId: "945728671382",
  appId: "1:945728671382:web:01563274514300c47d7cb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;