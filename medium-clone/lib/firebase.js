import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBc3CFuuY_zyKpzXsar0-muhONoiNftjc",
  authDomain: "nextjslearn-78d9c.firebaseapp.com",
  projectId: "nextjslearn-78d9c",
  storageBucket: "nextjslearn-78d9c.appspot.com",
  messagingSenderId: "202181283326",
  appId: "1:202181283326:web:657d761931bead5e8604af",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore();
export const storage = getStorage();
