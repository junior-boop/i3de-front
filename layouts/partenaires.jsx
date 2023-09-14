"use client"

import { useState } from "react";
import Container from "../composants/container";
import Carousel from 'react-simply-carousel'

export default function Partenaire(){
    const [activeSlide, setActiveSlide] = useState(0);
    return(
        <div id="partenaire">
                    <Container>
                        <div className="w-100 text-center titre py-5">
                        Partenaires
                        </div>
                        <div className="partenaire flex justify-content-center flex-wrap">
                            <Items url={'https://www.caysti.com/'}>
                                <img src="./caysti.jfif" height={'100%'}/>
                            </Items>
                            <Items url={'https://www.manlab.ovh/'}>
                                <img src="./assets/prototype/Manlab_logo.png" height = {'100%'} alt="" />
                            </Items>
                        </div>
                        <div className="w-100 text-center h2  py-5">
                            Ils nous soutiennent
                        </div>
                        <div className="partenaire row justify-content-center">
                        <Carousel
                        containerProps={{
                            className : 'carousel',
                        }}
                        autoplay
                        delay = {500}
                        autoplayDirection = {'forward'}
                        preventScrollOnSwipe
                        swipeTreshold={60}
                        activeSlideIndex={activeSlide}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                            style: {
                                display : 'none'
                            }
                        }}
                        backwardBtnProps={{
                            style: {
                                display: 'none'
                            }
                        }}
                        dotsNav={{
                            show: false,
                        }}
                        itemsToShow={5}
                        easing="ease-in-out"
                        speed={1500}
                        >
                            <Items url={'https://pricnac.org/'}>
                                <img src="./assets/prototype/pricnac.png" height={'100%'}/>
                            </Items>
                            <Items url={'https://www.auf.org/afrique-centrale-grands-lacs/'}>
                                <img src="./assets/prototype/auf.png" height={'100%'}/>
                            </Items>
                            <Items url={'https://obsglob.org/'}>
                                <img src="./assets/prototype/obreal.jpeg" height = {'100%'} alt="" />
                            </Items>
                            <Items url={'https://www.lecames.org/'}>
                                <img src="./assets/prototype/logo.svg" height = {'100%'} alt="" />
                            </Items>
                            <Items url={'https://aau.org/'}>
                                <img src="./assets/prototype/aau.png" height = {'100%'} alt="" />
                            </Items>
                            <Items url={'/'}>
                                <img src="./assets/prototype/reifac.png" height = {'100%'} alt="" />
                            </Items>
                        </Carousel>
                    
               </div>
            </Container>
        </div>
    )
}
function Items({children, url}){
    return(
        <a target="_blank" href = {url}>
            <div className="items">
                <div className="content">
                    {children}
                </div>
            </div>
        </a>
    )
}