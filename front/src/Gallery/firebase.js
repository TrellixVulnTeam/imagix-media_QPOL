import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2Qw7HaynXkw5Q-TcfOzcxhNIDlmremkU",
  authDomain: "imagixmedia-c04e3.firebaseapp.com",
  projectId: "imagixmedia-c04e3",
  storageBucket: "imagixmedia-c04e3.appspot.com",
  messagingSenderId: "67777119745",
  appId: "1:67777119745:web:ba64740aa1e1df2a1ae200",
  measurementId: "G-B5VZXSHBK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)