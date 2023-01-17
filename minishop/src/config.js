// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, sendPasswordResetEmail, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBEG0FcdN3o0i2qhj7UFZ_9xuniIQ-FCh8",
	authDomain: "mini-7fa01.firebaseapp.com",
	projectId: "mini-7fa01",
	storageBucket: "mini-7fa01.appspot.com",
	messagingSenderId: "448077662264",
	appId: "1:448077662264:web:b39f8e647ea8a124e43ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider, signOut, sendPasswordResetEmail}
