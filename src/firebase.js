import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7kF1Utf1Aj2t4KAYSlFDSo33MCO58Obk",
  authDomain: "farming-99d4c.firebaseapp.com",
  databaseURL: "https://farming-99d4c-default-rtdb.firebaseio.com",
  projectId: "farming-99d4c",
  storageBucket: "farming-99d4c.appspot.com",
  messagingSenderId: "417323593101",
  appId: "1:417323593101:web:aebb98b5b664d397fca1c4",
  measurementId: "G-GYJBT6DWKW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
