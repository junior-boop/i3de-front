"use client"

import Container from "@/composants/container"
import { QuillInlineDown } from "@/composants/icons"
import Bannier from "@/layouts/bannier"
import { useEffect, useRef, useState } from "react"

export default function FaqPage(){
    return (
        <div>
            <Bannier name={'FAQ'} />
            <Container>
                <div className="block lg:flex py-7 gap-4">
                    <div className="faq_container">
                        <FAQELEMENT
                        question = 'Comment Intégrer lʼimpression 3D dans son métier ?'
                        response={`
                            Lʼimpression 3D peut permettre de simplifier les chaines dʼapprovisionnement, de réduire le nombre de pièces dʼun ensemble, un stock minimum et des produits toujours prêts à évoluer.
                            <br />
                            Cʼest une démarche qui peut donner le vertige : le sujet est complexe et il est diicile dʼy trouver son chemin. Avant de penser machine ou matériaux, il faut en découvrir les usages.
                            <br />
                            La mission de PSL3D est de simplifier lʼaccès à ces technologies pour nos clients TPE, PME ou Instituts de Recherche
                        `}
                         />
                        <FAQELEMENT
                        question = 'Pourquoi imprimer en 3D, pour quels usages?'
                        response={`
                            Lʼimpression 3D est un outil dont il est diicile de lister tous les usages tant ils sont nombreux : déco, bricolage, réparations, restauration, assemblage, outil sur mesure, rangement, électronique, modélisme, mécanique, automatismes, accessoires de vélo…..
                            <br />
                            Cʼest un peu comme un visseuse sans fil ou un smartphone : Comment imaginer ce que lʼon pourra en faire tant quʼon en a pas eu en main ? Dès quʼon essaye, on comprend vite que les usages sont quasi illimités. Les usages quotidiens deviennent vite évident pour chacun.
                            <br />
                            On peut même imprimer une Jeep de A à Z ! Ce projet illustre parfaitement un niveau de précision technique aujourdʼhui couramment utilisé, jusquʼen lʼaéronautique.
                        `}
                         />
                        <FAQELEMENT
                        question = 'Comment ça marche lʼimpression 3D ?'
                        response={`
                            Une imprimante 3D nʼest autre quʼun robot, avec une tâche très spécialisée :
                            <ul>
                                <li>Le fichier représentant un objet en 3D est passé dans un logiciel qui le découpe en tranches de 0,05 à 0,4 mm dʼépaisseur. Chaque tranche est représentée comme un plan en 2D, avec des trajets à parcourir.</li>
                                <li>La tête dʼimpression va parcourir chacune des tranches dʼépaisseur en suivant un trajet en respectant le code de la route correspondant aux limites physiques de la machine (accélération, ralentissement, courbure des virages…). Elle dépose couche par couche une quantité précise de matériaux à une température précise, qui est refroidit aussitôt à une autre température tout aussi précise avant quʼune nouvelle couche soit déposée.</li>
                            </ul>
                            Çà, cʼest pour la théorie, en pratique, et toujours grâce à la communauté open source, il nʼy a plus quʼà suivre un tuto de quelques minutes pour comprendre les bases. Un peu de pratique fera le reste, pourvu quʼon ai une imprimante 3D fiable et parfaitement calibrée.
                        `}
                         />
                         <FAQELEMENT
                        question = 'Le prototypage 3D, quelles étapes ?'
                        response={`
                            Un croquis, des côtes précises de lʼexistant suisent souvent à faire une première ébauche, présentant les fonctionnalités attendues.
                            <br /><br />
                            La seconde étape consiste à imaginer un minimum de pièces remplissant un maximum des fonctions attendues, concevoir jonctions adaptées aux circonstances. A ce stade, un premier jeu de prototypes permet de valider les derniers points (essentiellement lʼergonomie). La connaissance profonde de nos outils de production nous permet dʼoptimiser les impressions, dès la conception des pièces.
                        `}
                         />
                         <FAQELEMENT
                            question = 'Quels sont les matériaux disponibles pour lʼimpression 3D ?'
                            response={`
                                <ul>
                                    <li>Le plastique, dʼune manière générale, a plutôt mauvaise réputation dʼun point de vue environnemental.</li>
                                    <li>Pourtant, lʼimpression 3D a permis lʼémergence de plastiques bio sourcés, SANS PETROLE !</li>
                                    <li>Le plus utilisé est le PLA, produit à partir de maïs, de canne à sucre, dʼalgues, de nombreux projets de recherche sont en cours. Il sʼimprime facilement, donne des pièces très bien finies et rivalise désormais haut la main sur de nombreux atout de lʼABS, référence traditionnelle dans lʼindustrie. Cʼest le matériaux de référence pour les prototypes, des objets de déco, des accessoires dans la maison ou lʼatelier.</li>
                                    <li>Le PETG est ce plastique dont sont fait les bouteilles dʼeau par exemple. Les filières de recyclages sont parmi les plus eicaces. Il sʼimprime facilement avec un peu de pratique dans des conditions stables. Cʼest le plus utilisé pour des pièces techniques courantes dans un atelier par exemple.</li>
                                    <li>ASA, PC, Nylon renforcé fibre de carbone, ces matériaux très techniques permettent des impressions de très haute qualité technique et souvent esthétiques.</li>
                                    <li>Nous travaillons exclusivement avec des filaments de 1er choix : la référence internationale, le Prusament Original, mais aussi et surtout avec les filaments Arianeplast, fabriqués à Sarrebourg dans la Moselle.</li>
                                </ul>
                            `}
                         />
                    </div>
                    <div className="faq_container">
                        <FAQELEMENT
                            question = 'Combien coûte une imprimante 3D ?'
                            response={`
                                <ul>
                                    <li>Les imprimantes 3D premiers prix, de 200 à 600 € qui demande un investissement en temps énorme avant dʼarriver à une qualité stabilisée, alors souvent remise en cause par des problèmes de fiabilité. Ces machines sont parfaites pour des hobbyistes qui cherchent avant tout le plaisir dʼapprendre pas à pas.</li>
                                    <li>A lʼopposé, le marché propose dʼexcellentes imprimantes 3D a destinations dʼunités industrielles cherchant avant tout des volumes de production, disposant de moyens humains et techniques adaptés : salles blanches climatisées… de 3 500 à 10 000 €, voire même beaucoup beaucoup plus plus des machines très pointues.</li>
                                    <li>Cʼest pour apporter une réponse pratique à ce problème que jʼai souhaité changer les règles du jeu, en prenant moi même le risque de lʼinvestissement en temps et en matériel, pour accompagner de nouveaux usagers.</li>
                                </ul>
                            `}
                         />
                        <FAQELEMENT
                            question = "Combien de temps prend l'impression d'un objet?"
                            response={`
                                L'estimation du temps d'impression depend de plusieurs parametres:
                                <ul>
                                    <li>Le volume de l'objet</li>
                                    <li>La presence ou non de support ou échafaudages</li>
                                    <li>la hauteur de chaque couche</li>
                                    <li>Le matériau utilisé</li>
                                    <li>L'épaisseur des parois</li>
                                    <li>Le taux de remplissage</li>
                                    <li>la vitesse des déplacements, de remplissage,...</li>
                                </ul>
                                pour avoir une estimation sur le temps d'impression, onn peut se baser sur une vitesse d'impression de l'ordre de 50mm/s
                            `}
                         />
                         <FAQELEMENT
                            question = "Peut'on imprimer des modèles multicolores ?"
                            response={`
                            L'impression 3D multicolore existe et dépend des technologies utilisées. en FDM, cela est rendu possible en fonction du nombre de buses/tetes d'impression. d'autres technologies assurent la couleur par un liant colorisé projeté entre chaque couche dde poudre.
                            `}
                         />
                         <FAQELEMENT
                            question = "Qu'est-ce qu'un travail de post-production ?"
                            response={`
                            Un modèle qui vient juste d'ettre imprimé peut nécessiter très souvent d'apporter des fintions. celles-ci peuvent etre sous la forme de retrait des supports, de poncage, d'apllication d'un vernis de lissage voire de teinture.
                            `}
                         />
                    </div>
                </div>
            </Container>
        </div>
    )
}

function FAQELEMENT({question, response}){
    const [height, setHeight] = useState(0)
    const [faqHeight, setFaqHeight] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const reponse = useRef()

    useEffect(() => {
        setHeight(ref.current.offsetHeight)
        console.log(ref.current.offsetHeight)
        setFaqHeight(ref.current.offsetHeight)
        reponse.current.innerHTML = response
    }, [])

    useEffect(() => {
        if(isOpen) setFaqHeight(height + reponse.current.offsetHeight)
        else setFaqHeight(ref.current.offsetHeight)
    }, [isOpen])
    return (
        <div style={{height : faqHeight }} className={`faq_element ${isOpen && 'border border-gray-300' }`}>
            <div ref = {ref} className="faq_element_question">
                {question}
                <button style={{outline : 'none'}} onClick={() => setIsOpen(!isOpen)}>
                    <span className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ease-out ${isOpen ? "rotate-180" : "rotate-0"} `}>
                        <QuillInlineDown className = "w-6 h-6" />
                    </span>
                </button>
            </div>
            <div ref={reponse} className="faq_element_repondre"></div>
        </div>
    )
}