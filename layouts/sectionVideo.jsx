import Image from "next/image";
import { useRef, useState } from "react";
import Container from "../composants/container";

export default function VideoPresentation (){

    const [open, setOpen] = useState(false)

    return (
        <section id="video">
            <Container>
                <div className="text-center w-100 h1 mb-4">
                    Bref Aperçu
                </div>
                <div className="d-flex" style={{justifyContent : 'center'}}>
                    <div className="video" style={{backgroundImage : 'url(/assets/images/image_screenshot.png)', backgroundPosition : 'center', backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
                        <div className="bg-special" style={{width : 72, aspectRatio : 1, borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : "center"}} onClick = {() => setOpen(!open)}>
                            <Image src={'/assets/images/icon_play.png'} width = {60} height = {72} style = {{transform : 'translateX(4px) scale(0.6)'}}/>
                        </div>
                    </div>
                </div>
                <VideoApercu open={open} onClick = {() => setOpen(!open)} close = {() => setOpen(!open)}/>
            </Container>
        </section>
    )
}


function VideoApercu({open, onClick, close}){
    const ref = useRef()

    return(
        <div id="apercu" style ={{display : open ? 'flex' : 'none' }} onClick = {onClick}>
            <div className="videoApercu">
                <video ref={ref} src="/background_Large.mp4"  width={'100%'} height = {'100%'} controls type = {'video/mp4'} ></video>
            </div>
            <div style={{width : 40, height: 40 , borderRadius : '50%', border : '3px solid white', display : "flex", alignItems : "center", justifyContent : "center", position : 'absolute', top : 24, right : 24, zIndex :100}} onClick = {close}>
                <Image src={'/assets/icon/icon_close_white.png'} width = {18} height = {18}  />
            </div>
        </div>
    )
}