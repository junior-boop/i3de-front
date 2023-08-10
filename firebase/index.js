"use client"
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LiSvoOSUSp6kKyu6nNYHLAJABN7W0BI",
  authDomain: "i3de-project.firebaseapp.com",
  projectId: "i3de-project",
  storageBucket: "i3de-project.appspot.com",
  messagingSenderId: "84252203249",
  appId: "1:84252203249:web:09b333a1eb28f564bab150",
  measurementId: "G-BKM4FVSZZN"
};

// Initialize Firebase
function FirebaseStatut(){
    const [DataBase, setDataBase] = useState(null)
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            const dataImage = getStorage(app)

            setDataBase(dataImage)
        }
    }, [])

    return DataBase
}

export default FirebaseStatut