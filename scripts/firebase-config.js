// scripts/firebase-config.js

// Firebase App (core)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD9H51GxwBdoIGr6h96lKXtA2Kr83tmqbk",
  authDomain: "realestatesystem-7c00c.firebaseapp.com",
  projectId: "realestatesystem-7c00c",
  storageBucket: "realestatesystem-7c00c.appspot.com",
  messagingSenderId: "4018708365",
  appId: "1:4018708365:web:4cdee92b50d6a5764d27c4",
  measurementId: "G-R4PJK08YPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
