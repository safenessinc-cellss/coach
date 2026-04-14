import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC81Xk3-8dG1KSjesT58JmZ8yHabecd4Vc",
  authDomain: "coach-iso.firebaseapp.com",
  projectId: "coach-iso",
  storageBucket: "coach-iso.firebasestorage.app",
  messagingSenderId: "338049458237",
  appId: "1:338049458237:web:7fbad29026fc4a4fec4a54",
  measurementId: "G-K1E3WB0NBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// (Opcional) Analytics - comentado porque no es necesario para el login
// export const analytics = getAnalytics(app);
