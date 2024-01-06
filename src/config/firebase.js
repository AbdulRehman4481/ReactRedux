// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhFwyNRGY5ZKl-oi8QaToQK6j6KCvbkRQ",
    authDomain: "students-mangments.firebaseapp.com",
    projectId: "students-mangments",
    storageBucket: "students-mangments.appspot.com",
    messagingSenderId: "308407180923",
    appId: "1:308407180923:web:29d3c667418272debcccde",
    measurementId: "G-WQB46PLLX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { analytics, firestore }