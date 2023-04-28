import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDF9B_22Lt1DErxwer2D-jLcT5FkWADgdM",
    authDomain: "dummy-project-fc7b8.firebaseapp.com",
    projectId: "dummy-project-fc7b8",
    storageBucket: "dummy-project-fc7b8.appspot.com",
    messagingSenderId: "640899484099",
    appId: "1:640899484099:web:f6aee6b66b11998c689576",
    measurementId: "G-TRDHM739JX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default {app,db,auth,storage};