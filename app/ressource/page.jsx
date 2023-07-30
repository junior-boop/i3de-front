"use client"

import Container from "@/composants/container"
import { BxsLike, CiNotification, IcOutlineAdd, MaterialSymbolsCloudDownloadRounded, MdiShare, RiSearchLine } from "@/composants/icons"
import { useGlobalContext } from "@/context/global_context"
import { Bannier_second } from "@/layouts/bannier"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"


export default function Ressource(){
    const [open, setOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(1)
    const [openNotification, setOpenNotification] = useState(false)
    const [dataRessource, setDataRessource] = useState([])

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }

    
    return(
        <div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <div className="outils_creation_ressource">
                    <Link href={'/ressource/new'}>
                        <button className="icon">
                            <IcOutlineAdd style = {{ width : 24, height : 24 }} />
                        </button>
                    </Link>
                    <button className="icon" onClick={() => setOpenNotification(!openNotification)}>
                        <CiNotification style = {{ width : 24, height : 24 }}/>
                        <div className="pince">
                            0
                        </div>
                    </button>
                    <NotificationView open={openNotification} />
                </div>
            </Bannier_second>
            <section id = 'ressource'>
            <Container>
                <div className="ressource">
                    <div className="option">
                        <h3> Recherche </h3>
                        <InputSearch placeholder={'Rechercher un article'} />
                        <h5 style = {{marginBottom : 12}}>Filtre</h5>
                        <div>
                            <ListElement titre = 'Tous les éléments' />
                            <ListElement titre = 'Fiches pédagogique'/>
                            <ListElement titre = 'Modèles 3D' />
                            <ListElement titre = 'Quelques exemples' />
                        </div>

                        

                    </div>
                    <div className="column">
                        {dataRessource.map(({id, data}) => <ImageItem key={id} data = {data} id={id} onClick = {() => handleCurrentImage(id)} />)}
                    </div>
                
                </div>
            </Container>
            </section>
            
        </div>
    )
}



export function ImageItem({data, onClick, id}){
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

function ListElement({titre}){
  
    return(
        <div className="listeElement">
           {titre}
        </div>
    )
} 

function InputSearch({ value, onChange, placeholder}){
    return(
        <div className="inputBase">
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            <div className="icon">
                <RiSearchLine style = {{ width : 20, hieght : 20, color : 'white'}}/>
            </div>
        </div>
    )
}

export function NotificationView({open}){
    return(
        <div className="notificationView" data-open = {open}>
            <div className="notificationHeader">
                <span>Les Notifications</span>
            </div>
            <div className="notificationContent">
                <div className="contentVide">
                    <span>Notification vide</span>
                </div>
            </div>
        </div>
    )
}
