import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyAKiOsnyxF50X_K1qdWGnIOLhrAd33eshg",

  authDomain: "premium-cards-store.firebaseapp.com",

  projectId: "premium-cards-store",

  storageBucket: "premium-cards-store.firebasestorage.app",

  messagingSenderId: "845097556437",

  appId: "1:845097556437:web:bc0362d882ae002c41c55c"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };