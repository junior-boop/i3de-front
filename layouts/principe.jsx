'use client'

import { useEffect, useRef, useState } from "react";
import Container from "../composants/container";
import { Controller, Scene } from "scrollmagic";


export default function Principal(){
    const [scrollState, setScrollState] = useState(0)
    const pilier = useRef()

    useEffect(() => {

        const controller = new Controller()
        const ScenePilier = new Scene({
            triggerElement: pilier.current,
            duration: 5000,
            triggerHook: 0,
          })

        ScenePilier.on('progress', event => {
            if (event.progress < 0.25) {console.log('state 1') ; setScrollState(1)}
            if (event.progress >= 0.25 && event.progress < 0.5 ) {console.log('state 2') ; setScrollState(2)}
            if (event.progress >= 0.5 && event.progress < 0.75 ) {console.log('state 3') ; setScrollState(3)}
            if (event.progress >= 0.75 && event.progress <= 1 ) {console.log('state 4') ; setScrollState(4)}

        })

        ScenePilier.setPin(pilier.current).addTo(controller)
    }, [pilier])

    return(
        <div ref={pilier} className="pilier">
            <Container>  
                <div className="pilier_header">
                    <div className="pilier_label">I3DE</div>      
                    <div> Les 04 Piliers </div>
                </div>
                
                <section className= "pilier_content">
                    <div>
                        <ScrollState scrollstate={scrollState} />
                    </div>
                    <div className="imge">
                        <ImageSlider scrollstate={scrollState} />
                    </div>
                </section>
            </Container>
        </div>
    )
} 


function ScrollState({scrollstate}){
    const [openObject, setOpenObject] = useState({
        ref1 : false,
        ref2 : false,
        ref3 : false,
        ref4 : false
    })

    const [autoHeight, setAutoHieght] = useState(72)

    const refdesc1 = useRef()
    const refdesc2 = useRef()
    const refdesc3 = useRef()
    const refdesc4 = useRef()

    useEffect(() => {
        if(scrollstate === 1 ) {setOpenObject({ref1 : true, ref2 : false, ref3 : false, ref4 : false}), setAutoHieght(refdesc1.current.offsetHeight + 32)}
        if(scrollstate === 2 ) {setOpenObject({ref1 : false, ref2 : true, ref3 : false, ref4 : false}), setAutoHieght(refdesc2.current.offsetHeight + 32)}
        if(scrollstate === 3 ) {setOpenObject({ref1 : false, ref2 : false, ref3 : true, ref4 : false}), setAutoHieght(refdesc3.current.offsetHeight + 32)}
        if(scrollstate === 4 ) {setOpenObject({ref1 : false, ref2 : false, ref3 : false, ref4 : true}), setAutoHieght(refdesc4.current.offsetHeight + 32)}
    }, [scrollstate])

    return(
        <div>
            <div data-open = {openObject.ref1} className="champs" style = {{height : openObject.ref1 ? 75 + autoHeight : 72}}>
                <div className="champs_titre">Renforcement du Capital humain</div>
                <div ref={refdesc1} className="champs_element">Les Enseignants enroulés dans le projet I3DE pourront créer des kits educatifs adaptés aux besoin de certaines matières et concepts seront ainsi simplifiés avec l’utilisation du materiel pedagogique adapté et représentatif des objects enseignés et desormais imprimés en 3D
                <div className="imageSlider_child">
                            <img src="/assets/image_1.jpg" alt="image" />
                        </div>
                </div>
            </div>
            <div data-open = {openObject.ref2} className="champs" style = {{height : openObject.ref2 ? 75 + autoHeight : 72}}>
                <div className="champs_titre">Promotion de la recherche et de l’innovation</div>
                <div ref={refdesc2} className="champs_element">Grâce au competences aquisent, les enseignants pourront initier et organiser les projets de recherche et d’incitation à l’entreprenariat incluant les apprenants mis en groupes. Ces groupes pourront développer des idées et solutions qui seront materialisés par des prototypes d’objets imprimés en 3D. comme exemple : la conception de la maquette d’un moteur de voiture en plastique ou d’un monument historique. les apprenants vont ainsi utiliser les ressources du FabLab pour imprimer en 3D les pieces final. Les Kits créés pourront être présentés à des concours, foire et journées portes-ouvertes 
                    <div className="imageSlider_child">
                            <img src="/assets/image_4.jpg" alt="image" />
                        </div>
                </div>
            </div>
            <div data-open = {openObject.ref3} className="champs" style = {{height : openObject.ref3 ? 75 + autoHeight : 72}}>
                <div className="champs_titre">Contribution Écologique</div>
                <div ref={refdesc3} className="champs_element">Réduction de l’empreinte corbone via la réutilisation (recyclage à  moyen terme) des déchets plastiques pour améliorer l’approvisionnement en filament pour les impressions.
                        <div className="imageSlider_child">
                            <img src="/assets/image_2.jpg" alt="image" />
                        </div>
                </div>
            </div>
            <div data-open = {openObject.ref4} className="champs" style = {{height : openObject.ref4 ? 75 + autoHeight : 72}}>
                <div className="champs_titre">Durabilité des kits éducatifs</div>
                <div ref={refdesc4} className="champs_element">
                        Pour éviter l’usage execifs de filaments les objets 3D n’ont qu’une durée de vie de 5ans <br/><br/>
                        <strong>Mutualisation des ressources :</strong><br/>
                        Création Banque modele 3D + fiches pédagogiques les plus optimales. un réseau de partage sera disponible en ligne et mettra à la disposition de tou les enseignants (Cameroun, Afrique et monde) les ressources les plus utiles et appréciés.
                        <div className="imageSlider_child">
                            <img src="/assets/image_3.jpg" alt="image" />
                        </div>
                    </div>
            </div>

        </div>
    )
}

function ImageSlider({scrollstate}){
    const [position, setPosition] = useState(0)

    useEffect(() => {
       if(typeof window !== 'undefined'){
        if(innerWidth <= 1280){
            if(scrollstate > 1) setPosition(572 * (scrollstate - 1))
            else setPosition(0)
        } else {
            if(scrollstate > 1) setPosition(618 * (scrollstate - 1))
            else setPosition(0)
        }
       }
    }, [scrollstate])
    return(
        <div className="principal">
            <div className="imageSlider">
                <div></div>
                <div className="imageSlider_parent">
                    <div className="imageSlider_content" style={{ transform : `translateY(-${position}px)` }}>
                        <div className="imageSlider_child">
                            <img src="/assets/image_1.jpg" alt="image" />
                        </div>
                        <div className="imageSlider_child">
                            <img src="/assets/image_4.jpg" alt="image" />
                        </div>
                        <div className="imageSlider_child">
                            <img src="/assets/image_2.jpg" alt="image" />
                        </div>
                        <div className="imageSlider_child">
                            <img src="/assets/image_3.jpg" alt="image" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
