// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY, 
  authDomain:import.meta.env.VITE_AUTH_DOMAIN, 
  projectId:import.meta.env.VITE_PRO_JECTID, 
  storageBucket:import.meta.env.VITE_STOR_AGE_BUCKET, 
  messagingSenderId:import.meta.env.VITE_MSG_SENDERID, 
  appId:import.meta.env.VITE_APP_ID, 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);