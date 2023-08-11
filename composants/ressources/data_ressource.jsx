"use client"

import { useCallback, useEffect, useState } from "react";
import ImageItem from "./image_item";

export default function RessourceField(){
    const [open, setOpen] = useState(false)
    const [dataRessource, setDataRessource] = useState([])
    const [currentImage, setCurrentImage] = useState(1)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }

    // const fetchData = useCallback( async () => {

    // })

    const handleData = async () => {
        const res = await fetch('/api/ressource')
        const data = await res.json()

        console.log(data)
        setDataRessource(data)
    }

    useEffect(() => {
        handleData()
    }, [])


    return(
        <div className="column">
            {dataRessource.map((el, key) => <ImageItem key={key} data = {el} id={el._id} onClick = {() => handleCurrentImage(el._id)} />)}
        </div>
    )
}