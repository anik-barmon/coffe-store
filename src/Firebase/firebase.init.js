// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLKg6L6GvXo5uH_kIPfeg51ZSHMPpJppA",
  authDomain: "coffee-store-app-1f402.firebaseapp.com",
  projectId: "coffee-store-app-1f402",
  storageBucket: "coffee-store-app-1f402.firebasestorage.app",
  messagingSenderId: "968810812136",
  appId: "1:968810812136:web:cf49d7318e37f472f3ef5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
