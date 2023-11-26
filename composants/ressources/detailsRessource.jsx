'use client'
import { useRouter } from "next/navigation"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare } from "../icons"
import { useState } from "react"
import { useGlobalContext } from "@/context/global_context"

export default function DetailsRessource({data}){
    const router = useRouter()

    const [Data, setData] = useState({...data})
    const { USERLOGININFO } = useGlobalContext()
    const [ user ] = USERLOGININFO

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
        <div className="card-ressource flex-1 p-4 flex flex-col justify-between rounded-2xl">
            <div>
                <div className="text-3xl font-semibold">
                    {
                    Data.ressources.titre === undefined 
                    ? (
                        <div className="h-7 w-[70%] mb-2 rounded-md bg-slate-200"></div>
                    ) 
                    : Data.ressources.titre
                    }
                </div>
                <div className="font-semibold uppercase">{
                    Data.ressources.titre === undefined 
                    ? (
                        <div className="h-5 w-40 mb-2 rounded-md bg-slate-100"></div>
                    ) 
                    : Data.ressources.categorie
                }</div>
                <div className="text-base italic">
                    {
                    Data.ressources.titre === undefined 
                    ? (
                        <div className="h-5 w-[30%]  rounded-md bg-slate-100"></div>
                    ) 
                    : `${Data.createdBy.user_name} ${Data.createdBy.user_subname}`
                    }
                </div>
                <div className="mt-5 font-semibold mb-2">Description</div>
                <div className="text-base descrition">
                {
                    Data.ressources.titre === undefined 
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
                    : Data.ressources.descriptions
                    }
                </div>
            </div>
            <div className="border-t border-gray-100 pt-3">
                
                <div className="flex items-center">
                    <Button onClick={handleLike} icon={<BxsLike style = {{ width : 24, hieght : 24}} />} number={Data.like !== undefined ? Data.like.length - 1 : '0'} />
                    <Button icon={<MdiShare style = {{ width : 24, hieght : 24}} />}/>
                </div>
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