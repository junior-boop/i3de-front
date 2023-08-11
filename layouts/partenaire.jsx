import Container from "../composants/container";
import Style from '../styles/style-e.module.css'

export default function PrincipalCible(){
    return(
        <>
        <Container>
        <div className="vide"></div>
        <div className="vide"></div>
        
        <div className="titre w-100 text-center py-4"> Les 04 Piliers </div>
        
        <section className={Style.container} style={{display : 'flex', alignItem : 'center', gap : 16, flexWrap : 'wrap', paddingTop : '64px', paddingBottom : 64}}>
            <Element className={'rand-4 rand-4-phone'} 
            title = {'Renforcement du capital humain'} 
            texte = {"Les enseignants et les apprenants seront formés et qualifiés entre autres à la prise en main des équipements du FabLab, l’impression 3D, la réalisation des dessins numériques 3D simples et complexes"}
            >
                <div className="Element_first">
                    <div className="images_element" style={{backgroundImage : `url(./assets/images/apprenant.jpg)`}}>
                        
                    </div>
                </div>
            </Element>
            <Element 
                className={'rand-2 rand-4-phone element'}
                title = {"Promotion de la recherche et de l'innovation"}
                texte = {"Grâce aux compétence acquises, les enseignants pourront initier et organiser des projets de recherche. La conception de maquettes telles que celle d'un moteur de voiture en plastique ou d'un monument historique facilitera leur compréhension."}
            >
                <div className="Element_first">
                    <div className="images_element">
                        <img src="./assets/images/Rigid-Blue-Engine-Model.png" alt="" width={'100%'} />
                    </div>
                </div>
            </Element>
            <Element className={'rand-2 rand-4-phone element'}
                title = {'Contribution Écologique'}
                texte = {"Réduction de l'empreinte carbone via la réutilisation (recyclage à moyen terme) des déchets plastiques pour améliorer l'approvisionnement en filament pour les impressions."}
            >
                <div className="Element_first">
                    <div className="images_element top" style={{backgroundImage : `url(./assets/images/bouteille_fillament.jpg)`}}>
                    </div>
                </div>
            </Element>
            <Element className={'rand-4 rand-4-phone '} 
                title = {"Durabilité des kits éducatifs"}
                texte = {"Les objets produits lors des impressions ont une durée de vie moyenne de cinq (05) ans. Ce qui évite l'utilisation superflue de filaments pour la réimpression des kits chaque année."}
            />
        </section>
        </Container>
        </>
    )
} 

function Element({style, className, title, texte, children}){
    return(
        <div className={`Element ${className}`} style={{ padding : 36, borderRadius : 16,...style }}>
            <div className="Element_first">
                <div className = 'Element_titre' style={{textTransform : "uppercase", marginBottom : 12}}>{title}</div>
                <div className= {'Element_text'} >{texte}</div>
            </div>
            {children}
        </div>
    )
}