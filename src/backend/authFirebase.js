import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// onAuthStateChanged(firebaseConfig.auth, (currentUser) => {
//     setUser(currentUser);
// });

const handle_signup_email_password = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(
      firebaseConfig.auth,
      email,
      password
    );
    console.log(user);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

const handle_login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(
      firebaseConfig.auth,
      email,
      password
    );
    console.log(user);
    return true;
  } catch (error) {
    console.log();
    return error.message;
  }
};

const sign_up_with_goggle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(firebaseConfig.auth, provider);
    // const name = result.user.name;
    // const  email = result.user.email;
    // const profile_pic = result.user.photoURL;
    console.log(result);
    return true;
  } catch (error) {
    console.log();
    return false;
  }
};

const handle_logout = async () => {
  try {
    const result = await signOut(firebaseConfig.auth);
    console.log(result);
    return true;
  } catch (error) {
    console.log();
    return false;
  }
};
export default {
  handle_signup_email_password,
  handle_login,
  handle_logout,
  sign_up_with_goggle,
};
