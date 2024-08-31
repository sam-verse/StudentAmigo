// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA3uOuNw9CWpiWx8DolYH9ZtWPD2cKOlc",
  authDomain: "studentamigo-d28fc.firebaseapp.com",
  projectId: "studentamigo-d28fc",
  storageBucket: "studentamigo-d28fc.appspot.com",
  messagingSenderId: "311252673781",
  appId: "1:311252673781:web:12b44760b5804cabe151bc",
  measurementId: "G-ZXRBG7PFC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const firestore=getFirestore(app);