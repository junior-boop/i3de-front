"use client"

import { useState } from "react";
import ImageItem from "./image_item";

export default function RessourceField(){
    const [open, setOpen] = useState(false)
    const [dataRessource, setDataRessource] = useState([])
    const [currentImage, setCurrentImage] = useState(1)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }


    return(
        <div className="column">
            {dataRessource.map(({id, data}) => <ImageItem key={id} data = {data} id={id} onClick = {() => handleCurrentImage(id)} />)}
        </div>
    )
}