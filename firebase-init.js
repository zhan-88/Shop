// Firebase initialization (shared module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOreKBnxEthVuxlwXbXmbUynKDqtBBJww",
  authDomain: "zan-shopping.firebaseapp.com",
  projectId: "zan-shopping",
  storageBucket: "zan-shopping.firebasestorage.app",
  messagingSenderId: "146058335048",
  appId: "1:146058335048:web:105bccb1e9a0ce88bb197d"
};

const app = initializeApp(firebaseConfig);
export { app };
