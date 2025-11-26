import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA0EgCHWsiwHbW1AA27FCl9caTT0pPWN2c",
  authDomain: "postmaster-1108d.firebaseapp.com",
  databaseURL: "https://postmaster-1108d-default-rtdb.firebaseio.com",
  projectId: "postmaster-1108d",
  storageBucket: "postmaster-1108d.firebasestorage.app",
  messagingSenderId: "329607739079",
  appId: "1:329607739079:web:5037f6015469b5103f30e2"
};
const app = initializeApp(firebaseConfig);
export default firebaseConfig