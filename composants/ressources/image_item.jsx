"use client"
import Link from "next/link"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare } from "../icons"
import { useEffect } from "react"

export default function ImageItem({data, onClick, id}){
    const { titre, images, Id } = data

    const IMG = JSON.parse(images)
    console.log(`https://i3de-server.godigital.workers.dev/images${IMG[0]}`)

    const handleLike = async () => {
        const user_id = user._id
        console.log(user_id)
        const response = await fetch(`http://18.215.69.15:3000/api/ressources/${id}/like?like=${user_id}`, {
            method : "PUT"
        })

        const like = await response.json()
        if( response.ok ){
            console.log(like)
            setData({ ...data.value, like : like.like })
        }
    }

    return(
        <div className="ImageItem" >
            <div className="col-12 p-0 image" style={{ cursor : 'pointer', position : 'relative', overflow : 'hidden'}}>
                <img src={IMG.length > 0 ? `https://i3de-server.godigital.workers.dev/images${IMG[0]}` : ''} width={'100%'}  alt = {'imagegroup'} />  
                <div className="little_menu">
                    <Button icon={<BxsLike style = {{ width : 20, hieght : 20}} />}  />
                    {/* <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 20, hieght : 20}} />}/> */}
                </div> 
                <div className="like">
                    1 Like
                </div>
            </div> 
            <Link href={`/ressource/${Id}`} className="descrition">
                <div className="title">
                    {titre}
                </div>
                <div className="icon">
                    <MdiShare style = {{ width : 24, hieght : 24}} />
                </div>
            </Link>  
        </div>
    )
}

function Button({onClick, icon}){
    return(
        <button type="button" className="action" onClick={onClick}>
            {icon}
        </button>
    )
}