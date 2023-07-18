'use client'

import './globals.css'
import '../styles/bootstrap.css'
import '../styles/bootstrap-utilities.css'
import '../styles/bootstrap-reboot.css'
import '../styles/responsive.css'
import '../styles/style.css'
import '../styles/style_base.css'

import styles from '@/styles/style-e.module.css'
import { Inter } from 'next/font/google'
import NavBar from '@/layouts/navbar'
import Footer from '@/layouts/footer'
import useFirebase from '@/firebase/firebase'
import Global_context from '@/context/global_context'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {LoginReduce, initialState} from '@/reduce/globalReduce'
import { useEffect, useReducer, useState } from 'react'
import { IS_LOGIN } from '@/reduce/constante'
import { doc, runTransaction } from 'firebase/firestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'I3DE',
  description: 'Generated by create next app',
  // script : "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
}



export default function RootLayout({ children }) {
  const {Database, Storages, Analytics, Auth} = useFirebase()
  const [state, dispatch] = useReducer(LoginReduce, initialState)

  const [isLogin, setIsLogin] = useState(false),
    LOGINCONTEXT = {isLogin, setIsLogin}


  const [userInfos, setUserInfos] = useState({}),
    USERLOGININFO = [userInfos, setUserInfos]

  const googleSignIn = async () => {
    const Provide = new GoogleAuthProvider();
    
    if(Auth !== null) {
      console.log(Auth, 'je suis dans la place')
       await signInWithPopup(Auth, Provide)
      .then( result => console.log(result))
      .catch(error => console.log(error))
    } ;
  }


  useEffect(() => {
    const ls = localStorage || window.localStorage 
    const key = 'i3de_login'
    if(ls.getItem(key) === null){
      ls.setItem(key, '')
    }
  }, [])



  const handleReduceLogIn = (data) => {
    const user =  {
      login : true,
      name : data.name,
      subname : data.subname,
      uid : data.uid,
      id : data.id
    }
    dispatch({type : IS_LOGIN, payload : user})
  }

  return (
    <html lang="en">
      <Global_context.Provider value={{
          Database, 
          Storages,
          Analytics,
          Auth, 
          googleSignIn,
          handleReduceLogIn,
          LOGINCONTEXT,
          USERLOGININFO
        }}>
      <body className={inter.className}>
        <NavBar/>
        <div className='vide'></div>
        {children}
        <footer className={styles.footer}></footer>
        <Footer />
        </body>
        </Global_context.Provider>
    </html>
  )
}
