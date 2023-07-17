import { transform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Style from '../styles/style-e.module.css'

export default function Contact() {
    return (
        <div className={Style.container} style = {{marginBottom : 64}}>
            <div className='row '>
                <div className='col-12 col-md-6 d-none d-md-block'>
                </div>
                <div className='col-12 col-md-6 d-md-block'>
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                </div>


            </div>
            <div>
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-delay="0">

                        <h2 className="heading mb-5">Get In Touch</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                        <div className="contact-info">

                            <div className="address mt-4">
                                <i className="icon-room"></i>
                                <h4 className="mb-2">Location:</h4>
                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                            </div>

                            <div className="open-hours mt-4">
                                <i className="icon-clock-o"></i>
                                <h4 className="mb-2">Open Hours:</h4>
                                <p>
                                    Sunday-Friday
                                    11:00 AM - 2300 PM
                                </p>
                            </div>

                            <div className="email mt-4">
                                <i className="icon-envelope"></i>
                                <h4 className="mb-2">Email:</h4>
                                <p>info@</p>
                            </div>

                            <div className="phone mt-4">
                                <i className="icon-phone"></i>
                                <h4 className="mb-2">Call:</h4>
                                <p>+1 1234 55488 55</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                        <form action="#">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="col-12 mb-3">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>

                                <div className="col-12">
                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

 export function FaqItem(){
     const ref = useRef()
     const questionHeight = useRef()
     
    const [height, setHeight] = useState(0)
    const [open, setOpen] = useState(false)
    

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(!open){
                setHeight(questionHeight.current.offsetHeight)
            } else {
                setHeight(ref.current.offsetHeight + questionHeight.current.offsetHeight)
            }
        }
    }, [ref, questionHeight, open])

    const changeColor = () => {
        if(!open){
            return "#fff"
        } else {
            return '#FFEFE7'
        }
    }

    const changeFontWieght = () => {
        if(!open){
            return { fontWeight : '600' }
        } else {
            return { fontWeight : '700', fontSize : 18 }
        }
    }

    const rotation = () => {
        if(!open){
            return 'rotateZ(180deg) translateY(-5px)'
        } else {
            return  'rotateZ(0deg) translateY(-5px)'
        }
    }

    return(
        <>
            <div className={Style.faqItem} style = {{height : height, overflow : 'hidden', backgroundColor : changeColor()}} onClick = {() => setOpen(!open)}>
                <div ref={questionHeight} className={Style.question}>
                    <div style = {changeFontWieght()}>Comment allons nous rendre possible la transition energetique entre les pays du nord et ceux du sud ? </div>
                    <span style={ {transform : rotation()} }>
                        <img src='./icon_little.png' width={'100%'} alt = 'fleche vers le haut'/>
                    </span>
                </div>
                <div ref={ref} className={Style.response}>response  Earlier this year Wroclaw and Sharjah (both former UNESCO World Book Capitals) announced in Poland that a new fund is being set up to generate financial support for writers, translators, and others in the Ukrainian publishing industry who have lost their livelihoods. And, more recently, in September they extended the support to publish children’s books in Ukrainian for refugees who have fled to Poland. The rights to several titles have been bought authors/illustrators/publishers and printed in the original language and distributed in Poland. Working with are libraries, schools, community centres and various NGOs working with refugees, more than 50,000 refugee children are expected to have access to these titles.</div>
            </div>
        </>
    )
}