'use client'
import Link from "next/link";
import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Paramettres(){

    const route = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if(pathname === '/paramettres') {
            route.replace('/paramettres/profils')
        }
    }, [])

    return(
        <div></div>
    )
}

