'use client'
import { useEffect, useState } from "react"
import { QuillChevronLeft, QuillChevronRight, QuillLoadingSpin } from "./icons"

export default function Slider({images}){

    const [position, setPosition] = useState(0)
  

    const Dote = ({active}) => {
        let actived = active
        return(
            <div className={` ${actived ? "w-5 h-5 bg-gray-600" :"w-3 h-3 bg-gray-300"} rounded-full transition-all duration-300`}></div>
        )
    }

    const ListeDote = () => {
        const listedote = images.map((el, key) => {
            if(position === key) return <Dote active={true} key={key} />
            else return <Dote active={false} key={key} />
        })

        return listedote
    }

    const imgsrc = () => {
        if(images !== undefined && images[position] !== undefined){
            return "https://i3de-server.godigital.workers.dev/images" + images[position]
        } else return '/assets/images/photo-19jpg'
    }

    
    console.log(imgsrc())
    useEffect(() => {
        console.log(imgsrc())
        if(position > images?.length - 1) setPosition(0)
        if(position < 0) setPosition(images?.length-1)
    }, [position])

    const CheckUndefine = () => {
        if(images !== undefined){
            return(
                <>
                    <div className=" z-30 opacity-30 hover:opacity-100 w-48 aspect-square rounded-full bg-[#00000067] flex items-center justify-end absolute top-[50%] translate-y-[-50%] left-0 translate-x-[-60%] overflow-hidden transition-all duration-[300ms]">
                        <button style={{outline : 'none'}} className="w-24 h-24 flex items-center justify-center outline-none transition-all duration-[300ms] active:scale-90" onClick={() => setPosition(position - 1)}>
                            <QuillChevronLeft className = "w-10 h-10 text-white" />
                        </button>
                    </div>
                    <div className="z-10 w-full h-full rounded-2xl overflow-hidden bg-cover relative flex items-center justify-center" style={{backgroundImage : `url(${imgsrc()})`, backgroundPosition: 'center', backgroundRepeat : 'no-repeat'}}>
                        <div className="w-full h-full " style={{backgroundColor : '#fff7', backdropFilter : 'blur(18px)'}}></div>
                        <img className="w-[95%] aspect-auto object-contain absolute rounded-lg" src={imgsrc()} alt="" />
                    </div>
                    <div className=" z-30 opacity-30 hover:opacity-100 w-48 aspect-square rounded-full bg-[#00000067] flex items-center justify-start absolute top-[50%] translate-y-[-50%] right-0 translate-x-[60%] overflow-hidden transition-all duration-[300ms]">
                        <button style={{outline : 'none'}} className="w-24 h-24 flex items-center justify-center outline-none transition-all duration-[300ms] active:scale-90" onClick={() => setPosition(position + 1)}>
                            <QuillChevronRight className = "w-10 h-10 text-white" />
                        </button>
                    </div>
                </>
            )
        } else {
            return (
                <div className="flex items-center justify-center flex-1 h-full">
                    <QuillLoadingSpin className = "w-20 h-20 loader" />
                </div>
            )
        }
    }

    return(
        <div className="h-[100%]" >
            <div className="relative overflow-hidden h-[100%]" style={{height : '100%', position : 'relative'}}>
                {
                    CheckUndefine()
                }
            </div>
            <div className="flex h-10 items-center justify-center gap-3">
                {
                    images !== undefined 
                    ? <ListeDote />
                    : null
                }
            </div>
        </div>
    )
}