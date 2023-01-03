import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW0HxBtsUVObboRO1wTehm1c123hj5xD4",
  authDomain: "doctors-portal-b6760.firebaseapp.com",
  projectId: "doctors-portal-b6760",
  storageBucket: "doctors-portal-b6760.appspot.com",
  messagingSenderId: "109892536227",
  appId: "1:109892536227:web:68b287555a95b7530c7c16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
