// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqdqZJiIDYeSLLUqJX7dOyw3eLo7bfmK8",
  authDomain: "mynewdocapp.firebaseapp.com",
  projectId: "mynewdocapp.firebaseapp.com",
  storageBucket: "mynewdocapp.firebasestorage.app",
  messagingSenderId: "199590981915",
  appId: "1:199590981915:web:e400e0b0bed6604636a3be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
