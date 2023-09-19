import RessourceField from "./data_ressource"
import Link from "next/link"
import InputSearch from "./inputSearch"

export default function Ressources_client({data, params}){

    const test = () => {
        switch (params) {
            case 'tout' :
                return data
            case 'pedagogique' :
                const result = data.filter(el => el.value.categorie === 'fiche pedagogique')
                return result
            case 'modele':
                const result2 = data.filter(el => el.value.categorie === 'modele 3d')
                return result2
            case 'exemple':
                const result3 = data.filter(el => el.value.categorie === 'realisation')
                return result3
            default :
                return data
        }
    }

    

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
                    <RessourceField data = {test()} />
                </div>
    )
}

function ListElement({titre, href = '/'}){
    return(
        <Link href={href} replace= {true} className="listeElement hover:bg-slate-200 px-2 block">
           {titre}
        </Link>
    )
} 




