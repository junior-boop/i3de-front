'use client'
import { useState } from "react"

export default function UserInfos(){
    const [nom, setnom] = useState('')

    const handleChange = () => {
        console.log('ville')
    }
    return(
        <div className="mt-6" style={{ marginTop : 24}}>
            <div className="w-full border border-slate-100 rounded-2xl p-6">
                <div>
                    <div className="text-xl">Nom</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-2 outline-none text-xl font-bold border-b border-slate-200" type="text" value={nom} onChange={({target}) => setnom(target.value)} />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-xl">Prenom</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-2 outline-none text-xl font-bold border-b border-slate-200" type="text" value={nom} onChange={({target}) => setnom(target.value)} />
                    </div>
                </div>
            </div>
            
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6">
                <div>
                    <div className="text-xl">Mail</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-2 outline-none text-xl font-bold border-b border-slate-200" type="email" value={nom} onChange={({target}) => setnom(target.value)} />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-xl">Numero de telephone</div>
                    <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                        <input className="w-full py-2 outline-none text-xl font-bold border-b border-slate-200" type="text" value={nom} onChange={({target}) => setnom(target.value)} />
                    </div>
                </div>
            </div>
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6">
                <div className="text-xl">Mot de passe</div>
                <div className="w-full mt-2 text-xl font-bold border-b border-slate-200">
                    <input className="w-full py-2 outline-none text-xl font-bold border-b border-slate-200" type="text" value={nom} onChange={({target}) => setnom(target.value)} />
                </div>
            </div>
            <div className="w-full mt-3 border border-slate-100 rounded-2xl p-6 ">
                <div className="text-xl">Les modifications</div>
                <div className="w-full mt-4 text-base font-bold border-b border-slate-200 flex gap-4">
                    <button className="px-4 py-3 rounded-lg" style={{ backgroundColor : '#D2F8D7', color : '#55BB77' }}>
                        Enregister
                    </button>
                    <button className="px-4 py-3 rounded-lg" style={{ backgroundColor : '#F5BBC4',  color : '#B3001B' }} >
                        Supprimer le Compte
                    </button>
                </div>
            </div>

        </div>
    )
}