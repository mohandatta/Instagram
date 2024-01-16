// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Config goes here
  apiKey: "AIzaSyBQRScl_6bxEV1YIeM6eAl0ko1ZvMU5PLY",
  authDomain: "insta-b618f.firebaseapp.com",
  projectId: "insta-b618f",
  storageBucket: "insta-b618f.appspot.com",
  messagingSenderId: "879916267794",
  appId: "1:879916267794:web:9785a7fd9f6854f3719bcb",
  measurementId: "G-LDMFTPK48X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;