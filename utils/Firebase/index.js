import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxrovrzw-mZsqukOPP5c6OUcAnW5Wrc3s",
  authDomain: "fooddocs-7396e.firebaseapp.com",
  projectId: "fooddocs-7396e",
  storageBucket: "fooddocs-7396e.appspot.com",
  messagingSenderId: "1045731894758",
  appId: "1:1045731894758:web:fa2c2b76107d2080ad2227",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
