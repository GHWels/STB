// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpULntt8G1iJowZS6K5QI5GbK_Jau9KEQ",
  authDomain: "smarttastingboard.firebaseapp.com",
  projectId: "smarttastingboard",
  storageBucket: "smarttastingboard.firebasestorage.app",
  messagingSenderId: "43368622812",
  appId: "1:43368622812:web:e6497d0f57162523e2e219",
  measurementId: "G-7MBPVYPQ9J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
