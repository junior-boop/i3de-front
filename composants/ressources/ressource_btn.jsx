"use client"

import Link from "next/link";
import { IcOutlineAdd } from "../icons";
import NotificationBtn from "../notification";
import { useGlobalContext } from "@/context/global_context";

export default function Ressource_btn(){
    const { LOGINCONTEXT } = useGlobalContext()
    const {isLogin, setIsLogin} = LOGINCONTEXT  
    return isLogin && (
        <div className="outils_creation_ressource">
            <Link href={'/ressource/new'}>
                <button className="icon">
                    <IcOutlineAdd style = {{ width : 24, height : 24 }} />
                </button>
            </Link>
            {/* <NotificationBtn /> */}
        </div>
    )
}