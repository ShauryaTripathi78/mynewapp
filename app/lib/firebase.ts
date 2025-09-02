// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqdqZJiIDYeSLLUqJX7dOyw3eLo7bfmK8",
  authDomain: "mynewdocapp.firebaseapp.com",
  projectId: "mynewdocapp.firebaseapp.com",
  storageBucket: "mynewdocapp.firebasestorage.app",
  messagingSenderId: "199590981915",
  appId: "1:199590981915:web:e400e0b0bed6604636a3be",
  measurementId: "G-C0EF0EXSS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Analytics is optional (works only in browser, not SSR)
export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}
