import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD45gEAVStnM9Rw5n45rBkS44yalCBXBck",
  authDomain: "master-igorey-1.firebaseapp.com",
  databaseURL: "https://master-igorey-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "master-igorey-1",
  storageBucket: "master-igorey-1.firebasestorage.app",
  messagingSenderId: "762315479043",
  appId: "1:762315479043:web:5620e6772829b3a98cd636",
  measurementId: "G-YDKSN7B82X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);