import RessourceField from "./data_ressource"
import Link from "next/link"
import InputSearch from "./inputSearch"

export default function Ressources_client({data, params}){

    const test = () => {
        if(params.search){
            switch (params.search) {
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
        if(params.search_with_word){
            // console.log(data[0])
            const sww = params.search_with_word
            const regex = new RegExp(sww, 'gi')
            const result = []

            data.forEach(el => {
                const check = el.value.titre.match(regex)
                if(check !== null){
                    result.push(el)
                }
            });

            return result
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




