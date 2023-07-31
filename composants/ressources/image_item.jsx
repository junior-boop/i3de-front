"use client"
import Link from "next/link"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare } from "../icons"

export default function ImageItem({data, onClick, id}){
    const { categorie, createdAt, createdBy, images, description, titre, like } = data
    const imagesFormated = JSON.parse(images)

    

    const handleLikeBtn = () => {
        
    }
    // 

    useEffect(() => {
       
    }, [like])

    return(
        <div className="ImageItem" >
            <div className="col-12 p-0 image" style={{ cursor : 'pointer', position : 'relative', overflow : 'hidden'}}>
                <img src={imagesFormated[0].image} width={'100%'}  alt = {'imagegroup'} />  
                <div className="little_menu">
                    <Button icon={<BxsLike style = {{ width : 20, hieght : 20}} />} onClick = {handleLikeBtn} />
                    <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 20, hieght : 20}} />}/>
                </div> 
                <div className="like">
                    {like} Like
                </div>
            </div> 
            <Link href={`/ressource/${id}`} className="descrition">
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