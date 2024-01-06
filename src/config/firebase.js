// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2oNMWfXpAsE14KC26shykamatEup39yg",
  authDomain: "survey-app-da359.firebaseapp.com",
  projectId: "survey-app-da359",
  storageBucket: "survey-app-da359.appspot.com",
  messagingSenderId: "317424837406",
  appId: "1:317424837406:web:d68157ea8e724de92f1f0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
