import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCSPrdfyNDn8FkmUJerMfsUMWSVUDTh8PU",
    authDomain: "ecommerce-travel-sense.firebaseapp.com",
    projectId: "ecommerce-travel-sense",
    storageBucket: "ecommerce-travel-sense.appspot.com",
    messagingSenderId: "82834597710",
    appId: "1:82834597710:web:421700b8fa4dad3ca1e01f"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)