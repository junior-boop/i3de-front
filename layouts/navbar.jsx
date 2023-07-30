"use client"

import Image from "next/image";
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from "react";
import Link from "next/link";
import { OouiUserAvatar, QuillEscape } from "@/composants/icons";
import { useGlobalContext } from "@/context/global_context";


export default function NavBar(){
    const [visible, setVisible] = useState(false)
    const [scroll, setScroll] = useState('absolute')
    const [color, setColor] = useState('')
    const {scrollY} = useScroll()
    const [userlocaldata, setuserLocalData] = useState({})

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const {LOGINCONTEXT, USERLOGININFO } = useGlobalContext()

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
                                                <span className="font-bold"><b>{surname} {name}</b></span>
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
                                <li onClick={handleVisibility}><Link href="/blog">Blog</Link></li>
                                <li onClick={handleVisibility}><Link href="/a_propos">A Propos</Link></li>
                                <li onClick={handleVisibility}><Link href="/faq">FAQ</Link></li>
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
                                            <Link className="mt-3"  href = '/profils'>
                                                <div className="avatar bg-special px-5 flex-col py-3 rounded-[7px]">
                                                    <div className="name text-white font-bold">
                                                        <span className="font-semibold"><b>{surname} {name}</b></span>
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

