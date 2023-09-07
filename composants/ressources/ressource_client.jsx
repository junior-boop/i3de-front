'use client'
import { RiSearchLine } from "../icons"
import RessourceField from "./data_ressource"
import { useState } from "react"

export default function Ressources_client({data}){

    const [searchState, setSearchState]= useState('tout')

    return (
        <div className="ressource">
                    <div className="option">
                        <h3 className="px-2"> Recherche </h3>
                            <InputSearch placeholder={'Rechercher une ressource'} />
                        <h5 style = {{marginBottom : 12}} className="px-2">Filtre</h5>
                        <div>
                            <ListElement onClick={() => setSearchState('tout')} titre = 'Tous les éléments' />
                            <ListElement onClick={() => setSearchState('fiche pedagogique')} titre = 'Fiches pédagogiques'/>
                            <ListElement onClick={() => setSearchState('Modeles 3D')} titre = 'Modèles 3D' />
                            <ListElement onClick={() => setSearchState('realisation')} titre = 'Quelques exemples' />
                        </div>

                    </div>
                    <RessourceField data = {data} />
                </div>
    )
}

function ListElement({titre, onClick}){
    return(
        <div onClick={onClick} className="listeElement hover:bg-slate-200 px-2">
           {titre}
        </div>
    )
} 

function InputSearch({ value, onChange, placeholder}){
    return(
        <div className="inputBase">
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            <div className="icon">
                <RiSearchLine style = {{ width : 20, hieght : 20, color : 'white'}}/>
            </div>
        </div>
    )
}


