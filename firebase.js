// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ssgHxDMPC31_15s9ZzbNRY-gjpZ7OAo",
  authDomain: "nextjs-twitter-clone-84b64.firebaseapp.com",
  projectId: "nextjs-twitter-clone-84b64",
  storageBucket: "nextjs-twitter-clone-84b64.appspot.com",
  messagingSenderId: "275955541399",
  appId: "1:275955541399:web:066bbbe12f9e2b9e7090d2"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
