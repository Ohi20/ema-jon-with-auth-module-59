// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO1r-fskN5Z_r4CIpg4PhweOhzCP9vBLE",
    authDomain: "ema-john-simple-5cdd7.firebaseapp.com",
    projectId: "ema-john-simple-5cdd7",
    storageBucket: "ema-john-simple-5cdd7.appspot.com",
    messagingSenderId: "842025878966",
    appId: "1:842025878966:web:1416c8e32db8f4c2a96d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;