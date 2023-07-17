'use client';

import Image from 'next/image'
import { useRef, useState } from 'react'
// import { motion, useScroll, useSpring, useTransform, motionValue } from 'framer-motion'


export default function Header(){
    const [second, setSecond] = useState('logo_anime')
    const ref = useRef()
    // const {scrollYProgress, scrollY} = useScroll({target : ref})
    // const y = useParallax({value : scrollY, distance : 30})

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
                    <div  className="text_2 h1 w-50 Montserrat color-white">
                        abordable et durable pour la professionnalisation des enseignements
                    </div>
                </div>
            </div>
            
        </header>
    )
}