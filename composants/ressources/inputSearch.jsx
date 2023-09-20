'use client'
import { useState } from "react";
import { RiSearchLine } from "../icons";
import Link from "next/link";

export default function InputSearch({placeholder}){
    const [search, setSearch] = useState('')
    return(
        <div className="inputBase">
            <input type="text" value={search} onChange={({target}) =>  setSearch(target.value)} placeholder={placeholder} />
            <Link href={`/ressource?search_with_word=${search}`} replace className="icon">
                <RiSearchLine style = {{ width : 20, hieght : 20, color : 'white'}}/>
            </Link>
        </div>
    )
}