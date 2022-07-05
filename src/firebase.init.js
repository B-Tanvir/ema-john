// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSuTjj7s1Vj7eoPflbJS5KoYAM3EWQK9c",
    authDomain: "ema-john-d7cdd.firebaseapp.com",
    projectId: "ema-john-d7cdd",
    storageBucket: "ema-john-d7cdd.appspot.com",
    messagingSenderId: "782542314741",
    appId: "1:782542314741:web:a18c5bdc8514c274ce39bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
