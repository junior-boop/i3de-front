'use client';

import Image from 'next/image'
import { useRef, useState } from 'react'


export default function Header(){
    const [second, setSecond] = useState('logo_anime')
    const ref = useRef()

    setTimeout(() => {
        setSecond('logo_anime start')
    }, 2000)

    
    return(
        <header style={{backgroundImage : `url(./assets/images/center_2.jpg)`}}>
            <div className="sup">
                <div className="background"></div>
                <div className="container">
                    <div className='speech h3 mt-3'> L{"'"}impression 3D pour l{"'"}Éducation</div>
                    <div className="text_1 grand-titre text-gradient Montserrat">
                        Une solution pratique,
                    </div>
                    <div  className="text_2 h1 w-full lg:w-50 Montserrat color-white">
                        abordable et durable pour la professionnalisation des enseignements
                    </div>
                </div>
            </div>
            
        </header>
    )
}