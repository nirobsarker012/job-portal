// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.API_KEY, 
  authDomain:import.meta.env.AUTH_DOMAIN, 
  projectId:import.meta.env.PRO_JECTID, 
  storageBucket:import.meta.env.STOR_AGE_Bucket, 
  messagingSenderId:import.meta.env.Messaging_SenderId, 
  appId:import.meta.env.App_Id, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);