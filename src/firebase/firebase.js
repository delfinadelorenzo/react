// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnLEYX6JyB5LNWZLjGGTeSLOpjgDaj_R0",
  authDomain: "brave-3c89e.firebaseapp.com",
  projectId: "brave-3c89e",
    storageBucket: "brave-3c89e.appspot.com",
    messagingSenderId: "378968896447",
    appId: "1:378968896447:web:4337a9ccfbce305d0f270a"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);
export default db;