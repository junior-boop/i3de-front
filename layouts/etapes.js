import Image from "next/image";
import Container from "../composants/container";


export default function Schema(){
    return(
        <Container cName="py-5">
            <div className="vide" />
                <h1 className=' w-100 text-center my-5' style ={{marginBottom : 14}}>
                Les 05 Étapes clés
                </h1>
                <div style={{display : 'flex', justifyContent : 'center'}}>
                    <div className="cote" >
                        <Cadre y={30} title={'Le Demarrage'} texte = {"selection des etablissements bénéficiaires & installation de l'infrastructure physique d'impression 3D"} inverse/>
                        <Cadre y={360} title={"L'animation continue des FabLabs"} texte = {"Suivie - Évaluation"} inverse/>
                        <Cadre y={610} title={"Plaidoyer et création d'un livre blanc"} texte = {"En vue de l'expension de I3DE à  établissements d'ici 2026"} inverse/>
                    </div>
                    <div className="tree" >
                        <Image src={'/assets/images/schema_parcours.svg'} width = {40} height = {759} alt = {'branche des 5 etapes'}/>
                    </div>
                <div className="cote">
                    <Cadre  y={100} title={'Le renforcement des capacités des enseignements'} texte = {"Établissement du groue cible"} />
                    <Cadre  y={215} title={"Déploiement d'un reseau numérique"} texte = {"de partage et de mutualisation des ressources physiques et virtuelles"} />
                    <Cadre  y={470} title={"Mise sur pieds d'un systeme de collecte / tri / recyclage de déchets plastiques"} texte = {"Pour la production locale de filaments d'impression 3D"} />
                </div>
            </div>
        </Container>
    )
}

function Cadre({title, texte, inverse, y}){
    return (
        <div className="Cadre" style={{borderRadius:16, backgroundColor:'#fafafa',  textAlign : !inverse ? 'left' : 'right', position : 'absolute', top : !y ? null : y , width : '100%'}}>
            <h4 className="color-orange-rouge">{title}</h4>
            {texte}
        </div>
    )
}