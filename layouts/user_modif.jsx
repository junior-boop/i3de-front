'use client'
import { useEffect, useState } from "react"
import { useGlobalContext } from "@/context/global_context";

export default function UserInfos(){
    const {LOGINCONTEXT, USERLOGININFO, handleReduceLogOut } = useGlobalContext()

    const {isLogin, setIsLogin} = LOGINCONTEXT
    const [userInfos, setUserInfos] = USERLOGININFO

    const [user, setUser] = useState({...userInfos})


    useEffect(() => {
        setUser({...userInfos})
    }, [userInfos])

    const handleSubmit = (e) => {
       e.preventDefault()

        console.dir(e.target)
    }
    return(
        <form className="mt-6" style={{ marginTop : 24}} onSubmit={handleSubmit} >
            <div className="w-full border border-slate-100 rounded-2xl p-6">
                <div>
                    <div className="text-base">Nom</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="text"  value={user.name} onChange={({target}) => setUser({...user, name : target.value})} />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-base">Prénom</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="text" value={user.surname} onChange={({target}) => setUser({...user, surname : target.value})}/>
                    </div>
                </div>
            </div>
            
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6">
                <div>
                    <div className="text-base">E-mail</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="email" value={user.mail} onChange={({target}) => setUser({...user, mail : target.value})}/>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-base">Numéro de téléphone</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="text" value={user.tel} onChange={({target}) => setUser({...user, tel : target.value})}/>
                    </div>
                </div>
            </div>
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6">
                <div>
                    <div className="text-base">Mot de passe</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="password" value={user.pw} onChange={({target}) => setUser({...user, pw : target.value})}/>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-base">Confirmer votre mot de passe</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-1 outline-none text-xl font-bold border-b border-slate-200" type="password" />
                    </div>
                </div>
            </div>
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6 ">
                <div className="text-base">Les modifications</div>
                <div className="w-full mt-4 text-base font-bold  flex gap-4">
                    <button type="submit" className="px-4 py-3 rounded-lg" style={{ backgroundColor : '#D2F8D7', color : '#55BB77' }}>
                        Enregister
                    </button>
                    <button className="px-4 py-3 rounded-lg" style={{ backgroundColor : '#F5BBC4',  color : '#B3001B' }} >
                        Supprimer le Compte
                    </button>
                </div>
            </div>

        </form>
    )
}