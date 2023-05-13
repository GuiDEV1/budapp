import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA48CHBYfQuH9Uo3KXv-Z5WeRM785ksFL0",
  authDomain: "erpmicrouploads.firebaseapp.com",
  projectId: "erpmicrouploads",
  storageBucket: "erpmicrouploads.appspot.com",
  messagingSenderId: "571512593256",
  appId: "1:571512593256:web:f14837727addfad82114dd",
  measurementId: "G-D2SGR074P0"
};

  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);