"use client"

import Image from "next/image";
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from "react";
import Link from "next/link";
import { OouiUserAvatar, QuillEscape } from "@/composants/icons";
import { useGlobalContext } from "@/context/global_context";
import  { useRouter } from 'next/navigation'


export default function NavBar(){
    const [visible, setVisible] = useState(false)
    const [userlocaldata, setuserLocalData] = useState({})

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [avatarMenu, setAvatarMenu] = useState(false)
    const [deconnexion, setDeconnexion] = useState(false)

    const {LOGINCONTEXT, USERLOGININFO, handleReduceLogOut } = useGlobalContext()

    const {isLogin, setIsLogin} = LOGINCONTEXT
    const [userInfos, setUserInfos] = USERLOGININFO
    
    const router = useRouter()
    

    const getUsetInfos = async () => {
        const get = await userInfos

        console.log(get)
        if(get.hasOwnProperty('name')){
            if(get.name.includes(' ')) setName(get.name.split(' ')[0])
            else setName(get.name)
            if(get.surname.includes(' '))setSurname(get.surname.split(' ')[0])
            else setSurname(get.surname)
        }
    }

    useEffect(() => {
        getUsetInfos()
        console.log(surname, name)
    }, [isLogin, userInfos])



    const handleVisibility = () => setVisible(!visible)
    
    const handledeconnexion = () => {
        setDeconnexion(true)
        setTimeout(() => {
            handleReduceLogOut()
            setDeconnexion(false)
            router.replace('/inscription')
        }, 1000)
    }


    const DonVisible = () => {
        if(typeof window !== 'undefined'){
            if(window.location.pathname !== '/dons'){
                return (
                    <>

                        {
                            !isLogin
                            ? (<div>
                                    <Link  href={'/souscription'}>
                                        <button className="login_btn">S’inscrire</button>
                                    </Link>
                                </div>)
                            : (
                                <div>
                                    <div className="avatar">
                                        <div>
                                            <span className="font-bold"><b>{surname} {name}</b></span>
                                        </div>
                                        <div className="relative">
                                            <button onClick={() => setAvatarMenu(!avatarMenu)} style = {{outline : 'none'}} className="icon rounded-full aspect-square bg-special items-center justify-center w-12 flex items-center justify-center">
                                                <OouiUserAvatar className = "text-white w-7" />
                                            </button>
                                            <div style={{bottom : -135, right : -12,boxShadow : '0 5px 10px -5px #0005', visibility : avatarMenu ? 'visible' : 'hidden', overflow : "hidden", opacity : avatarMenu ? 1 : 0 }} className="absolute p-2 bg-white border border-gray-100 rounded-xl transition-all duration-300">
                                                <div>
                                                    <Link style={{width : 200}} href={'/parametres/profils'} className="block py-2 px-2 hover:bg-slate-200  rounded-lg mb-2 text-right">
                                                        Mon Compte
                                                    </Link>
                                                    <Link style={{width : 200}} href={'/parametres/profils'} className="block py-2 px-2 hover:bg-slate-200  rounded-lg mb-2 text-right">
                                                        Mes activités
                                                    </Link>
                                                    <button onClick={handledeconnexion} className="py-2 px-3 bg-special rounded-lg text-white font-semibold w-full justify-start text-right">
                                                        Se déconnecter
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        <>
            <nav className={'color'} style =  {{ position : 'fixed'}}>
        <div className="container-fluid">
            <div className="navbar">
                <div className="logo">
                    <Link href={'/'}>
                        <img src="/assets/icon/i3de_logo.png" width= {85}  alt="logo i3de" />
                    </Link>
                </div>
                <div className="icon-right flex gap-7">
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
                            <ul className="px-2">
                                <li onClick={handleVisibility}><Link href="/">Accueil</Link></li>
                                <li onClick={handleVisibility}><Link href="/ressource">Ressources</Link></li>
                                <li onClick={handleVisibility}><Link href="/blog">Blog</Link></li>
                                <li onClick={handleVisibility}><Link href="/a_propos">A Propos</Link></li>
                                <li onClick={handleVisibility}><Link href="/faq">FAQ</Link></li>
                                <li onClick={handleVisibility}><Link href="/don">Faire un don</Link></li>
                                
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
                                                <hr className="my-3" />
                                                <Link href={'/parametres/profils'} className="py-2 block  mb-2 font-bold">
                                                    Mon Compte
                                                </Link>
                                                <Link href={'parametres/profils'} className="py-2 block  mb-2 font-bold">
                                                    Mes activitéss
                                                </Link>
                                                
                                                <button onClick={handledeconnexion}  style={{width : 'max-content', borderRadius : 7}} className="bg-special px-4 flex-col py-3 rounded-[7px] w-max text-white font-bold mt-3">
                                                        Se déconnecter
                                                </button>
                                            </div>
                                        )
                                    }
                            </ul>
                        </div>
                        <div>
                            <Link href={'/'} className="content">
                                <div>
                                    <img src="/assets/icon/logo-cadre.png" width= '100%' height = "100%" />
                                </div>
                                <div>
                                    <h4 className="text-gradient">Impression 3D <br/> pour l{"'"}Education</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
        {
            deconnexion ?
            (
                <div className="fixed w-full h-[100vh] z-[2000] flex items-center justify-center flex-col" style={{backgroundColor : "#fff7"}}>
                    <img src="./load.gif" alt="" className="w-24 h-24" />
                    <div className = 'text-lg font-bold'>
                        Processus de déconnexion ...
                    </div>
                </div>
            ) 
            : null
        }
    </>
    )
}

