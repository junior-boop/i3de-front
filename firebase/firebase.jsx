import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA6LiSvoOSUSp6kKyu6nNYHLAJABN7W0BI",
  authDomain: "i3de-project.firebaseapp.com",
  projectId: "i3de-project",
  storageBucket: "i3de-project.appspot.com",
  messagingSenderId: "84252203249",
  appId: "1:84252203249:web:09b333a1eb28f564bab150",
  measurementId: "G-BKM4FVSZZN"
};



export default function useFirebase(){

  const [Database, setDatabase] = useState(null)
  const [Analytics, setAnalytics] = useState(null)
  const [Storages, setStorages] = useState(null)
  const [Auth, setAuth] = useState(null)


  useEffect(() => {
    if(typeof window !== 'undefined'){
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const storage = getStorage(app);
      const database = getFirestore(app)
      const authentification = getAuth(app)


      setAnalytics(analytics)
      setDatabase(database)
      setStorages(storage)
      setAuth(authentification)
    }
  }, [])


  return { Database, Analytics, Storages, Auth }
}