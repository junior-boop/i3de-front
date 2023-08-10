'use client'

import Container from "@/composants/container";
import { BiFacebook, CarbonToolKit, Iconoir3dSelectFace, IonLogoLinkedin, MaterialSymbolsCall, MaterialSymbolsMailRounded, TeenyiconsCertificateOutline } from "@/composants/icons";
import Bannier from "@/layouts/bannier";
import Link from "next/link";

export default function Apropos(){
    return(
        <div>
            <Bannier name={"A Propos"} />
            <section id='presentation' className="h-auto">
                <div className="container">
                
                <div className='secteur'>
                    <div className="image">
                        <img src="/Caysti-1744.jpg" className="object-left" alt="" height={'100%'} />
                    </div>
                </div>
                <div className='secteur h-auto'>
                    <div className="desc">
                    <div className="mb-10">
                    <div style={{ backgroundImage : 'linear-gradient(to bottom, transparent 50%, #ff9fa2 50%)', boxDecorationBreak :'clone', lineHeight : 1}} className="inline mb-10 text-5xl font-bold">C{"'"}est quoi le projet I3DE ?</div>
                    </div>
                        <div className="text-xl">
                        Le projet Impression 3D pour l{"'"}Éducation (I3DE) vise l’amélioration de la
                        professionnalisation du processus pédagogique des écoles grâce aux technologies
                        d’impression 3D.<br/>
                        L’impression 3D est une technologie robuste, abordable et relativement récente qui permet
                        la fabricaƟon des objets en plastique peu importe leur complexité. Elle sera exploitée ici par
                        des enseignants afin de construire des modèles 3D de prototypes à des buts de simulation ou
                        imprimer des modèles physiques d’objet sujet de cours divers. <br/>
                        Cette année 05 lycées techniques en bénéficieront de micro-fablabs d’impression 3D. Le
                        déploiement se déroulera en 03 étapes clés :

                        <div>
                            <ul className="my-6">
                                <li className="text-xl list-disc">
                                L’installation de l’infrastructure physique des micro-fablabs (Fabrication Laboratory)
                                d’impression 3D au sein des établissements choisis.
                                </li>
                                <li className="text-xl list-disc">
                                Le renforcement de capacités d’un groupe d’enseignants des établissements du
                                groupe cible. Les enseignants seront formés et qualifiés à la prise en main des
                                équipements, la réalisation des dessins numériques 3D simples et complexes à but
                                didactique.
                                </li>
                                <li className="text-xl list-disc">
                                L’animation continue (suivi - évaluation) à travers le déploiement d’un réseau de
                                partage et de mutualisation de ressources physiques et virtuelles (objets 3D, modèles
                                3D et fiches pédagogiques). Pilotée par un point focal formé à cet effet, l’animaƟon
                                continue est le socle du mécanisme de suivi-évaluation. Elle permettra également
                                d’accompagner les élèves dans la réalisaton de projets de fin année innovants et
                                réalistes grâce aux objets 3D imprimés en local.
                                </li>
                            </ul>
                        </div>

                        </div>
                    </div>
                </div>
                </div>
            </section>
            <div id="Services">
                <div className="mb-10 flex items-center justify-center">
                    <div style={{ backgroundImage : 'linear-gradient(to bottom, transparent 50%, #ff9fa2 50%)', boxDecorationBreak :'clone', lineHeight : 1}} className="inline mb-10 text-5xl font-bold">Ce que nous Proposons</div>
                </div>
                
                <Container>
                    <div className="services row">
                        <Service icon={<TeenyiconsCertificateOutline style = {{ width : 48, height : 48}} />} image={'./assets/prototype/prototype_7.jpg'} titre={'Formation certifiante '} texte={"Vous êtes apprenants, artisans, techniciens? Nous vous offrons une formation professionnelle hautement pratique et certifiante qui vous permet de non seulement de manipuler des matériaux et logiciels de modélisation, d’impression 3D; Mais surtout la création d’entreprise ou de carrière autour de l'impression 3D. "} button={'Candidater'} url="https://docs.google.com/forms/d/e/1FAIpQLSd9Opzqm58GbmX7gcsfbDAqSKO5bnHpRsO135XFMTpcbGIqdA/viewform?embedded=true"/>
                        <Service icon={<Iconoir3dSelectFace style = {{ width : 56, height : 56}} />}  image={'./assets/prototype/prototype_6.jpg'} titre={'Impression et conception à la demande '} texte={"Vous ne voulez pas ou n’avez pas les moyens (techniques / financiers) d’acquérir, installer ou maintenir les imprimantes 3D? Vous avez donc la possibilité de bénéficier de nos services de prototypage, de modélisation et d’impression d’objet 3D en ne payant que pour le service ponctuel dont vous avez besoin."} button={'Imprimer'} url="/modele"/>
                        <Service icon={<CarbonToolKit style = {{ width : 56, height : 56}} />}  image={'./assets/prototype/prototype_3.jpg'} titre={"Équipements efficaces"} texte={"De labos d’écoles de formation, à l’agriculture en passant par l’artisanat ou la maintenance/réparation industrielles, etc…, nous vous offrons des équipements, des imprimantes performantes à bas coûts sans délais et tracas d’importation."} button={'Commander'} url="https://docs.google.com/forms/d/e/1FAIpQLSea1h5y_cWQdWJFXLi7g6KPPnpnB3tRXwBbH5v8wnpVgks3A/viewform?embedded=true"/>
                    </div>
                </Container>
            </div>
            <div className="py-44">
                <Container>
                    <div className="mb-10 flex items-center justify-center">
                        <div style={{ backgroundImage : 'linear-gradient(to bottom, transparent 50%, #ff9fa2 50%)', boxDecorationBreak :'clone', lineHeight : 1}} className="inline mb-10 text-6xl font-bold">Notre Equipe</div>
                    </div>
                    <div className="flex flex-wrap gap-24  mb-14">
                        <div className="flex-1 aspect-[10/11] overflow-hidden rounded-2xl">
                            <img src="/assets/images/portrait.webp" alt="" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="flex-1 py-11">
                            <div className="card_team_titre color-orange-rouge">Fondateur - Coordonnatrice du projet</div>
                            <div  className="text-6xl font-semibold mb-5">KITIO T. ARIELLE</div>
                            <div  className="card_team_description">Assure que le projet est réalisé dans les délais et le budget impartis et qu{"'"}il répond aux objectifs et aux exigences définis</div>
                            <div>
                                <div className="card_team_element flex gap-6">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-clair">
                                        <MaterialSymbolsCall className = "w-7 h-7 color-orange-rouge" />
                                    </div>
                                    <div>
                                        <span className="block text-lg text-gray-500 mb-1">Téléphone</span>
                                        <span className="block text-2xl text-gray-800 font-semibold">(+237) 690 767 619</span>
                                    </div>
                                </div>
                                <div className="card_team_element flex gap-6">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-clair">
                                        <MaterialSymbolsMailRounded className = "w-7 h-7 color-orange-rouge" />
                                    </div>
                                    <div>
                                        <span className="block text-lg text-gray-500 mb-1">Adresse E-mail</span>
                                        <span className="block text-2xl text-gray-800 font-semibold">arielle.kitio@gmail.com</span>
                                    </div>
                                </div>
                                <div className="card_team_element flex gap-6">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-clair">
                                        <IonLogoLinkedin className = "w-7 h-7 color-orange-rouge" />
                                    </div>
                                    <div>
                                        <span className="block text-lg text-gray-500 mb-1">LinkedIn</span>
                                        <span className="block text-2xl text-gray-800 font-semibold">linkedin.com/in/arielle-kitio-tsamo/</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <Resposable name = 'Dr TIOGUEM FRANCK' poste = 'Co-Fondateur' tel={'(+237) 655733765'} mail={'juniorseppo@gmail.com'} linkedin={'linkin.com'} />
                        <Resposable name = "KONO FRANCOISE" poste = "Assistante projet" tel={'(+237) 693 801 828'} linkedin={'https://www.linkedin.com/in/fran%C3%A7oise-kono-828460196/'}/>
                        <Resposable name = "WADO LEOLIN" poste = "Responsable technique"/>
                        <Resposable name = "BAVOUA RODOLPHE" poste= "Ingénieur en chef" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

function Resposable({name, poste, linkedin, tel, mail}){
    return(
        <div className="w-full ">
            <div className="w-full aspect-square overflow-hidden rounded-xl border border-gray-200">
                <img src="/assets/images/photo-19.jpg" alt="" className="object-cover w-full h-full object-center" />
            </div>
            <div className="px-3">
                <div className="pt-4 text-2xl font-bold text-center">{name}</div>
                <div className="text-lg font-semibold text-red-400 text-center">{poste}</div>
            </div>
            <div className="flex justify-center gap-4 mt-3">
                { tel && <LINK_SOCIAUX type = "tel" url = {`tel:${tel}`} />}
                { linkedin && <LINK_SOCIAUX type='linkedin' url={linkedin} /> }
                { mail && <LINK_SOCIAUX type='mail' url={`mailto:${mail}`} /> }
            </div>
        </div>
    )
}

function LINK_SOCIAUX({url = '/', type}){
    return(
        <Link target="_blank" href={url} className="inline-flex w-12 h-12 rounded-full border border-gray-400 items-center justify-center">
            {
                type === 'tel'
                ? <MaterialSymbolsCall className = "w-7 h-6" />
                : type === 'linkedin' 
                ? <IonLogoLinkedin className = "w-7 h-6" />
                : type === 'mail'
                ? <MaterialSymbolsMailRounded className = "w-7 h-6" /> 
                : null 
            }
        </Link>
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




const texte =`Le projet Impression 3D pour l'Éducation (I3DE) vise l’amélioration de la
professionnalisation du processus pédagogique des écoles grâce aux technologies
d’impression 3D.
L’impression 3D est une technologie robuste, abordable et relativement récente qui permet
la fabricaƟon des objets en plastique peu importe leur complexité. Elle sera exploitée ici par
des enseignants afin de construire des modèles 3D de prototypes à des buts de simulation ou
imprimer des modèles physiques d’objet sujet de cours divers.
Cette année 05 lycées techniques en bénéficieront de micro-fablabs d’impression 3D. Le
déploiement se déroulera en 03 étapes clés :
 L’installation de l’infrastructure physique des micro-fablabs (Fabrication Laboratory)
d’impression 3D au sein des établissements choisis.
 Le renforcement de capacités d’un groupe d’enseignants des établissements du
groupe cible. Les enseignants seront formés et qualifiés à la prise en main des
équipements, la réalisation des dessins numériques 3D simples et complexes à but
didactique.
 L’animaƟon conƟnue (suivi - évaluation) à travers le déploiement d’un réseau de
partage et de mutualisation de ressources physiques et virtuelles (objets 3D, modèles
3D et fiches pédagogiques). Pilotée par un point focal formé à cet effet, l’animaƟon
continue est le socle du mécanisme de suivi-évaluation. Elle permettra également
d’accompagner les élèves dans la réalisaton de projets de fin année innovants et
réalistes grâce aux objets 3D imprimés en local.`