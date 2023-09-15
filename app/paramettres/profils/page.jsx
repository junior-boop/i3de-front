
import Link from "next/link";
import Titre from "@/composants/titre";
import UserInfos from "@/layouts/user_modif";



export default function Profils(){
    return(
        <>
            <div className="w-full">
                <Titre titre={'Profils'} className="mt-0" />
                <div className="p-6 bg-slate-100 w-full">
                    Dans cette page vous pouvez apporter des modification a vos informations personnels.
                </div>
                <UserInfos />
            </div>
        </>
    )
}

