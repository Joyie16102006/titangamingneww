// firebase-config.js — Shared Firebase Configuration
// Project: titan-1234

const firebaseConfig = {
    apiKey: "AIzaSyD3F1XNMatvqb9PAnPDpeFzI50tY9FpvEo",
    authDomain: "titan-1234.firebaseapp.com",
    projectId: "titan-1234",
    storageBucket: "titan-1234.firebasestorage.app",
    messagingSenderId: "724199347880",
    appId: "1:724199347880:web:1386474aaa5367beb4549d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = typeof firebase.auth === 'function' ? firebase.auth() : null;
const db = typeof firebase.firestore === 'function' ? firebase.firestore() : null;
const storage = typeof firebase.storage === 'function' ? firebase.storage() : null;
