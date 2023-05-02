// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsNop6LlyhYZhThipwehxlqg2fmNR6m30",
  authDomain: "chef-recipe-hunter-a5f77.firebaseapp.com",
  projectId: "chef-recipe-hunter-a5f77",
  storageBucket: "chef-recipe-hunter-a5f77.appspot.com",
  messagingSenderId: "353095005577",
  appId: "1:353095005577:web:1b6c94a9ccede8a58f5d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;