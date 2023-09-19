
import RessourceField from "./data_ressource"
import Link from "next/link"
import InputSearch from "./inputSearch"

export default function Ressources_client({data}){


    return (
        <div className="ressource">
                    <div className="option">
                        <h3 className="px-2"> Recherche </h3>
                            <InputSearch placeholder={'Rechercher une ressource'} />
                        <h5 style = {{marginBottom : 12}} className="px-2">Filtre</h5>
                        <div>
                            <ListElement href="/ressource?search=tout" titre = 'Tous les éléments' />
                            <ListElement href="/ressource?search=pedagogique" titre = 'Fiches pédagogiques'/>
                            <ListElement href="/ressource?search=modele" titre = 'Modèles 3D' />
                            <ListElement href="/ressource?search=exemple" titre = 'Quelques exemples' />
                        </div>

                    </div>
                    <RessourceField data = {data} />
                </div>
    )
}

function ListElement({titre, href = '/'}){
    return(
        <Link href={href} replace = {true} className="listeElement hover:bg-slate-200 px-2 block">
           {titre}
        </Link>
    )
} 




