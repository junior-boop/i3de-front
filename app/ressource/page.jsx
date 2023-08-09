import Container from "@/composants/container"
import {RiSearchLine } from "@/composants/icons"
import RessourceField from "@/composants/ressources/data_ressource"
import Ressource_btn from "@/composants/ressources/ressource_btn"
import { Bannier_second } from "@/layouts/bannier"


export default function Ressource(){    
    
    return(
        <div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <Ressource_btn />
            </Bannier_second>
            <section id = 'ressource'>
            <Container>
                <div className="ressource">
                    <div className="option">
                        <h3> Recherche </h3>
                            <InputSearch placeholder={'Rechercher une ressource'} />
                        <h5 style = {{marginBottom : 12}}>Filtre</h5>
                        <div>
                            <ListElement titre = 'Tous les éléments' />
                            <ListElement titre = 'Fiches pédagogiques'/>
                            <ListElement titre = 'Modèles 3D' />
                            <ListElement titre = 'Quelques exemples' />
                        </div>
                        <RessourceField />

                    </div>
                </div>
            </Container>
            </section>
            
        </div>
    )
}







function ListElement({titre}){
    return(
        <div className="listeElement">
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


