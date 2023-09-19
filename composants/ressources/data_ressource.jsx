'use client'
import ImageItem from "./image_item";

export default function  RessourceField({data}){

    return(
        <div className="column">
            {data.map((el, key) => <ImageItem key={el.key} data = {el} id={el.key} />)}
        </div>
    )
}