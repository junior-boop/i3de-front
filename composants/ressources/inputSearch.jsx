'use client'
import { RiSearchLine } from "../icons";

export default function InputSearch({ value, onChange, placeholder}){
    return(
        <div className="inputBase">
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            <button className="icon">
                <RiSearchLine style = {{ width : 20, hieght : 20, color : 'white'}}/>
            </button>
        </div>
    )
}