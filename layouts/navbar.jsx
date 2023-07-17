"use client"

import Image from "next/image";
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from "react";
import Link from "next/link";
import { OouiUserAvatar, QuillEscape } from "@/composants/icons";
import { useGlobalContext } from "@/context/global_context";
import { collection, doc, documentId, runTransaction } from "firebase/firestore";


export default function NavBar(){
    const [visible, setVisible] = useState(false)
    const [scroll, setScroll] = useState('absolute')
    const [color, setColor] = useState('')
    const {scrollY} = useScroll()
    const [userlocaldata, setuserLocalData] = useState({})

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const {LOGINCONTEXT, USERLOGININFO, Database} = useGlobalContext()

    const {isLogin, setIsLogin} = LOGINCONTEXT
    const [userInfos, setUserInfos] = USERLOGININFO
    

    useEffect(() => {
        return scrollY.onChange((a) => {
            a > 0 ? setScroll('fixed') : setScroll('absolute')
        })
    }, [scroll])
    
    useEffect(() => {
        return scrollY.onChange((a) => {
            a > 0 ? setColor('color') : setColor('')
        })
    }, [])




    const handleVisibility = () => setVisible(!visible)
    

    const DonVisible = () => {
        if(typeof window !== 'undefined'){
            if(window.location.pathname !== '/dons'){
                return (
                    <>

                        {
                            !isLogin
                            ? (<div><Link  href={'/inscription'}>
                            <button className="login_btn">S’inscrire</button>
                        </Link></div>)
                            : (
                                <div>
                                    <Link  href = '/profils'>
                                        <div className="avatar">
                                            <div>
                                                {/* <span className="font-semibold">{userInfos.surname.split(' ')[0]} {userInfos.name.split(' ')[0]}</span> */}
                                            </div>
                                            <div className="icon rounded-full aspect-square bg-special items-center justify-center">
                                                <OouiUserAvatar className = "text-white w-7" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }

                    </>
                )
            } else {
                return null
            }
        }
    }


    useEffect (() => {
        const key = 'i3de_login'
        const ls = localStorage || window.localStorage

        if(ls.getItem(key) !== '') {
            const data = JSON.parse(ls.getItem(key))
            setIsLogin(data.login)
            setuserLocalData(data)
        }
    }, [])

    useEffect(() => {
        if(Database !== null){
            const userRef = doc(Database, 'users', userlocaldata.id)

            
            console.log(userInfos, userRef, 'bonjour');

            (async function(){
                try {
                    const newPopulation = await runTransaction(Database, async (transaction) => {
                      const sfDoc = await transaction.get(userRef);
                      if (!sfDoc.exists()) {
                        throw "Document does not exist!";
                      }
                  
                      const userDoc = sfDoc.data()
                      setUserInfos(userDoc)
                      console.log(userDoc)
                    });
                    // newPopulation()
                  } catch (e) {
                    // This will be a "population is too big" error.
                    console.error(e);
                  }
            })()
        }
    }, [isLogin])
    

    useEffect(() => {
        if(userInfos !== null){
            console.log(userInfos.surname)
            // setSurname(userInfos.surname.split(' ')[0])
            // setName(userInfos.name.split(' ')[0])
        }
    }, [userInfos])

    

    
    return(
        <nav className={color} style =  {{ position : scroll}}>
        <div className="container-fluid">
            <div className="navbar">
                <div className="logo">
                    <div>
                        <img src="/assets/icon/i3de_logo.png" width= {85}  alt="logo i3de" />
                    </div>
                </div>
                <div className="icon-right d-flex">
                    {
                        DonVisible()
                    }
                    <div className="menu d-flex align-items-center">
                        <Image src = {'/icon_burgeur.svg'} width= {28} height = {28}  onClick = {handleVisibility} />
                    </div>
                </div>
                <div className="nav-overlay"
                    data-visible = {visible}
                >
                    <div className="menu_screen">
                    <div className="cover" onClick={handleVisibility}></div>
                    <div className="nav-content"
                        data-visible = {visible} 
                    >
                        <div className="vide">
                            <div className="close_btn close">
                                <div className=" icone"
                                     onClick = {handleVisibility}
                                >
                                    <div>
                                     <QuillEscape width = {28} height = {28} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li onClick={handleVisibility}><Link href="/">Accueil</Link></li>
                                <li onClick={handleVisibility}><Link href="/ressource">Ressources</Link></li>
                                <li onClick={handleVisibility}><Link href="/actualites">Actualités</Link></li>
                                <li onClick={handleVisibility}><Link href="/contact-us">Contactez-nous</Link></li>
                               
                                    
                                    {
                                        !isLogin 
                                        ? (
                                            <button style={{border : '3px solid var(--bg-color-orange)', borderRadius : 10, padding : '7px 20px', backgroundColor : 'transparent', margin : '12px 0', color : 'var(--bg-color-orange-rouge)', fontWeight :'700'}}>
                                                <Link href={'/inscription'} >
                                                    Inscrivez-vous
                                                </Link>
                                            </button>
                                        )
                                        : (<div>
                                            <Link  href = '/profils'>
                                                <div className="avatar bg-special px-5 flex-col py-3">
                                                    <div className="name">
                                                        <span className="font-semibold">{surname} {name}</span>
                                                    </div>
                                                
                                                </div>
                                            </Link>
                                        </div>)
                                    }
                            </ul>
                        </div>
                        <div>
                            <div className="content">
                                <div>
                                    <img src="/assets/icon/logo-cadre.png" width= '100%' height = "100%" />
                                </div>
                                <div>
                                    <h4 className="text-gradient">Impression 3D <br/> pour l{"'"}Education</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

