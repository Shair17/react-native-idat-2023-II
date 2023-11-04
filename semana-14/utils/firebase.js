// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/** @type {FirebaseOptions} */
const firebaseConfig = {
  apiKey: "AIzaSyDKk-KtXq1_2E1ccqL5ow4bjrJ44dNOvXI",
  authDomain: "idat-da2ba.firebaseapp.com",
  projectId: "idat-da2ba",
  storageBucket: "idat-da2ba.appspot.com",
  messagingSenderId: "56447410860",
  appId: "1:56447410860:web:c45e5b1cf3b73164d23509",
  measurementId: "G-5DH152RFD8",
  databaseURL: "https://idat-da2ba-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const database = getDatabase(app);
