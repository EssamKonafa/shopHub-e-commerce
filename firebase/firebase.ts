// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3X7-r1jspDFK89Fr9mt46eB-E3wqaq00",
    authDomain: "shophub-52e20.firebaseapp.com",
    projectId: "shophub-52e20",
    storageBucket: "shophub-52e20.appspot.com",
    messagingSenderId: "388042346348",
    appId: "1:388042346348:web:2b1b7abbc228c782ab2d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}