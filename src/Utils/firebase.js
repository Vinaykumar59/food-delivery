// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLcUdUgPea5oQIHBWxlvJoG03l5zdJ_Y8",
  authDomain: "food-delivery-app-22fc3.firebaseapp.com",
  projectId: "food-delivery-app-22fc3",
  storageBucket: "food-delivery-app-22fc3.appspot.com",
  messagingSenderId: "393552166844",
  appId: "1:393552166844:web:d3d1d03aa87e661c8775b9",
  measurementId: "G-L4XCML84HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);