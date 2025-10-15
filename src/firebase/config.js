import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACzNiYPqVK4hwBz3OTJ5EQL9X_clmPM6s",
  authDomain: "shahdin-dashboard.firebaseapp.com",
  projectId: "shahdin-dashboard",
  storageBucket: "shahdin-dashboard.firebasestorage.app",
  messagingSenderId: "162777607594",
  appId: "1:162777607594:web:32e82717cf4732e9a90fd3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
