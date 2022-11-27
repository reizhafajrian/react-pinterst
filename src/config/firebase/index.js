
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAfMRswaM1iksH-jNuXBhsgbpprFKKm51w",
  authDomain: "react-pinterest-cf9c5.firebaseapp.com",
  projectId: "react-pinterest-cf9c5",
  storageBucket: "react-pinterest-cf9c5.appspot.com",
  messagingSenderId: "613275766837",
  appId: "1:613275766837:web:ad6683401873c10208217c",
  measurementId: "G-401JCWB2L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export {app} 