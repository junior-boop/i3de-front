"use client"

import Link from "next/link"
import { BiFacebook, BiLinkedin, BiYoutube } from "../composants/icons"
import { useState } from "react"

export default function Footer(){
    return (
        <>
            <section className="info_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>
                            A Propos de nous
                        </h5>
                        <ul>
                            <div>
                            I3DE est une initiative (CAYSTI & MANLAB) qui a pour vocation de créer une industrie locale qui renforce le capital humain et facilite l’accès à des outils (technologies et méthodes) innovants basés sur l’impression 3D au service des secteurs économiques de croissance et de l’éducation en particulier.
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                            Entrer en contact
                        </h5>
                        <ul>
                            <li>
                                BP 7283, Yaoundé
                            </li>
                            <div style = {{ padding : '14px 0'}}>
                                <li>
                                    i3de@caysti.com 
                                </li>
                                <li>contact@i3deducation.com</li>
                            </div>
                            
                                <li>
                                    +237 696752150
                                </li>
                                
                            
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                            Restez informé
                        </h5>
                        <ul>
                            <li>
                                Inscrivez-vous aujourd'hui pour obtenir des informations et les dernières nouvelles sur les produits
                            </li>
                            <li>
                                <NewsLetter />
                            </li>
                            <li style = {{ display: 'flex', gap : 14 }}>
                                <BtnSociaux icon={<BiFacebook style = {{ width : 24, height : 24 }} />} url = 'https://web.facebook.com/caysti' />
                                <BtnSociaux icon={<BiYoutube style = {{ width : 24, height : 24 }}/>} url = 'https://www.youtube.com/@caysti1507' />
                                <BtnSociaux icon={<BiLinkedin style = {{ width : 24, height : 24 }}/>} url = 'https://www.linkedin.com/company/caysti/' />
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            </section>

            <section className="footer_section bg-special">
                <p className="color-white px-3">
                    Copyright &copy; 2022 All Rights Reserved By <a className="color-white" href="https://html.design/">CAYSTI Corp & MANLAB</a>
                </p>
            </section>
        </>
    )
}


function NewsLetter(){
    const [mail, setMail] = useState(' ')


    const handleSave = async () => {
        const newsLetter = {
            mail : mail,
        } 

        console.log(mail)

        const  headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }

        let response = await fetch("/api/newsletter", { 
            method: "POST",
            body: JSON.stringify(newsLetter),
            headers: headersList
        });

        if(response.ok) {
           setMail('')
        }
    }
    return (
        <div className="newsletter">
            <input type="text" value={mail} onChange={({target}) => setMail(target.value)} />
            <button onClick={handleSave}> Envoyer </button>
        </div>
    )
}

function BtnSociaux({url = 'https://', icon}) {
    return(
       <Link href={url}>
            <div className="sociaux" style={{ cursor : 'pointer'}}>
                {icon}
            </div>
       </Link>
    )
}