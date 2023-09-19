"use client"

import Container from "@/composants/container"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare, QuillArrowLeft, QuillChevronLeft, QuillChevronRight, QuillLoadingSpin } from "@/composants/icons"
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation"
import { useGlobalContext } from "@/context/global_context"

export default function HandleRessource({params}){

    const { id } = params
    const router = useRouter()

    const [Data, setData] = useState({})
    const { USERLOGININFO } = useGlobalContext()
    const [ user ] = USERLOGININFO


    useEffect(() => {
        (async () => {
            const response = await fetch('http://18.215.69.15:3000/api/ressources/'+id)
            const data = await response.json()
            console.log(data);
            setData({...data})
        })()
    }, [])
    
    const handleLike = async () => {
        const user_id = user._id
        console.log(user_id)
        const response = await fetch(`http://18.215.69.15:3000/api/ressources/${id}/like?like=${user_id}`, {
            method : "PUT"
        })

        const like = await response.json()
        if( response.ok ){
            console.log(like)
            setData({ ...Data, like : like.like })
        }
    }


    return(
        <div>
            <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 28}}>
                    <Container style={{display : 'flex', height : 56, orderBotttom : "1px solid silver", flexDirection : 'column', gap : 16}} >
                        <div>
                            <div className="flex gap-4 items-center">
                                <button className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center" onClick={() => router.back()} >
                                    <QuillArrowLeft className = "w-7 h-7"  />
                                </button>
                                <span className="font-bold">
                                    Back
                                </span>
                            </div>
                        </div>
                    </Container>
                </div>
                    <Container cName="flex gap-7">
                        <div className="card-ressource aspect-square mb-40 rounded-2xl">
                            <Slider images={Data?.images} />

                        </div>
                        <div className="card-ressource flex-1 p-4 flex flex-col justify-between rounded-2xl">
                            <div>
                                <div className="text-3xl font-semibold">
                                   {
                                    Data.titre === undefined 
                                    ? (
                                        <div className="h-7 w-[70%] mb-2 rounded-md bg-slate-200"></div>
                                    ) 
                                    : Data.titre
                                   }
                                </div>
                                <div className="font-semibold uppercase">{
                                    Data.titre === undefined 
                                    ? (
                                        <div className="h-5 w-40 mb-2 rounded-md bg-slate-100"></div>
                                    ) 
                                    : Data.categorie
                                }</div>
                                <div className="text-base italic">
                                    {
                                    Data.titre === undefined 
                                    ? (
                                        <div className="h-5 w-[30%]  rounded-md bg-slate-100"></div>
                                    ) 
                                    : `${Data.createdBy.name} ${Data.createdBy.surname}`
                                   }
                                </div>
                                <div className="mt-5 font-semibold mb-2">Description</div>
                                <div className="text-base descrition">
                                {
                                    Data.titre === undefined 
                                    ? (
                                        <>
                                            <div className="h-5 w-[70%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[80%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[80%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[90%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[80%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[70%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[80%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[80%] mb-2  rounded-md bg-slate-100"></div>
                                            <div className="h-5 w-[90%] mb-2  rounded-md bg-slate-100"></div>
                                        </>
                                    ) 
                                    : Data.description
                                   }
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-3">
                                
                                <div className="flex items-center">
                                    <Button onClick={handleLike} icon={<BxsLike style = {{ width : 24, hieght : 24}} />} number={Data.like !== undefined ? Data.like.length - 1 : '0'} />
                                    <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 24, hieght : 24}} />}/>
                                    <Button icon={<MdiShare style = {{ width : 24, hieght : 24}} />}/>
                                </div>
                            </div>
                        </div>
                    </Container>
        </div>
    )
}


function Slider({images}){

    console.log(images)

    // const imagesFunc  = () => {
    //     const tb = []
    //     const imagesFormats = images?.replace(/\[|\]/g, '')
    //     const dataIMage = imagesFormats?.split(',')

    //     dataIMage?.forEach(element => {
    //         tb.push(element.replace(/\"/g, ''))
    //     });
        
    //     return tb
    // }
    // const imagesParse = imagesFunc()
    const [position, setPosition] = useState(0)


    const Dote = ({active}) => {
        let actived = active
        return(
            <div className={` ${actived ? "w-5 h-5 bg-gray-600" :"w-3 h-3 bg-gray-300"} rounded-full transition-all duration-300`}></div>
        )
    }

    const ListeDote = () => {
        const listedote = images.map((el, key) => {
            if(position === key) return <Dote active={true} />
            else return <Dote active={false} />
        })

        return listedote
    }

    const imgsrc = () => {
        if(images !== undefined && images[position] !== undefined){
            return 'http://18.215.69.15:3000'+images[position]
        } else return '/assets/images/photo-19jpg'
    }

    

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
        <div className="h-[100%]">
            <div className="relative overflow-hidden h-[100%]">
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

function Button({onClick, icon, number}){
    return(
        <button type="button" style={{outline : 'none'}} className="h-11 flex outline-none items-center gap-3 rounded-[50px] px-3 hover:bg-gray-100 transition-all duration-[300ms] active:scale-90" onClick={onClick}>
            {icon}
            <span>{number}</span>
        </button>
    )
}