import Link from "next/link";
import Container from "../composants/container";
import { CarbonToolKit, Iconoir3dSelectFace, TeenyiconsCertificateOutline } from "../composants/icons";

export default function Services(){
    return(
        <div id="Services">
            <div className="titre w-100 text-center py-5 "> Nos Services </div>
            <Container>
                <div className="services row">
                    <Service icon={<TeenyiconsCertificateOutline style = {{ width : 48, height : 48}} />} image={'./assets/prototype/prototype_7.jpg'} titre={'Formation certifiante '} texte={"Vous êtes apprenants, artisans, techniciens? Nous vous offrons une formation professionnelle hautement pratique et certifiante qui vous permet de non seulement de manipuler des matériaux et logiciels de modélisation, d’impression 3D; Mais surtout la création d’entreprise ou de carrière autour de l'impression 3D. "} button={'Candidater'} url="/candidature"/>
                    <Service icon={<Iconoir3dSelectFace style = {{ width : 56, height : 56}} />}  image={'./assets/prototype/prototype_6.jpg'} titre={'Impression et conception à la demande '} texte={"Vous ne voulez pas ou n’avez pas les moyens (techniques / financiers) d’acquérir, installer ou maintenir les imprimantes 3D? Vous avez donc la possibilité de bénéficier de nos services de prototypage, de modélisation et d’impression d’objet 3D en ne payant que pour le service ponctuel dont vous avez besoin."} button={'Imprimer'} url="/modele"/>
                    <Service icon={<CarbonToolKit style = {{ width : 56, height : 56}} />}  image={'./assets/prototype/prototype_3.jpg'} titre={"Équipements efficaces"} texte={"De labos d’écoles de formation, à l’agriculture en passant par l’artisanat ou la maintenance/réparation industrielles, etc…, nous vous offrons des équipements, des imprimantes performantes à bas coûts sans délais et tracas d’importation."} button={'Commander'} url="/commande"/>
                </div>
            </Container>
        </div>
    )
}

function Service({image, icon, titre, texte, url = "/", button }){
    return(
        <div className="col-12 col-md-2 col-lg-4">
            <div className="service_cadre">
                <div className="image" style={{backgroundImage : `url(${image})`}}/>
                <div className="icon_zone">
                    <div className="icon">
                        {icon}
                    </div>
                </div>
                <div className="desc">
                    <h3 className="text-center pb-4">{titre}</h3>
                    <p className="text-center" style={{fontWeight : '400' }}>{texte}</p>
                </div>
                
                <div className="btn_service">
                <Link  href = {url}>
                    <button>{button}
                    </button>
                    </Link>
                </div>
                    
            </div>
            
        </div>
    )
}