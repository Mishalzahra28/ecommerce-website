import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA1b8bvjaBTnvFzZGnnKAx6HhHGTCBEX04",
  authDomain: "desivibes-fcc44.firebaseapp.com",
  projectId: "desivibes-fcc44",
  storageBucket: "desivibes-fcc44.appspot.com",
  messagingSenderId: "227401409714",
  appId: "1:227401409714:web:bcf00a59950548566955ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
