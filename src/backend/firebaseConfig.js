import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAHDdBtyHqvqqxGv6jdty3dRpM87iIQ93o",
    authDomain: "app-fest-4e681.firebaseapp.com",
    projectId: "app-fest-4e681",
    storageBucket: "app-fest-4e681.appspot.com",
    messagingSenderId: "843256298854",
    appId: "1:843256298854:web:ca6814d047409a2ae29ca7",
    measurementId: "G-LJ6T68J0Q1"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default {app,db,auth,storage};