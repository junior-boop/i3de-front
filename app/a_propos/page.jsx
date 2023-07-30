import Container from "@/composants/container";
import { BiFacebook, CarbonToolKit, Iconoir3dSelectFace, IonLogoLinkedin, MaterialSymbolsCall, MaterialSymbolsMailRounded, TeenyiconsCertificateOutline } from "@/composants/icons";
import Bannier from "@/layouts/bannier";
import Link from "next/link";

export default function Apropos(){
    return(
        <div>
            <Bannier name={"A Propos"} />
            <section id='presentation'>
                <div className="container">
                
                <div className='secteur'>
                    <div className="image">
                    <img src="/image_banniere.jpg" alt="" height={'100%'} />
                    </div>
                </div>
                <div className='secteur'>
                    <div className="desc">
                    <div className="mb-10">
                    <div style={{ backgroundImage : 'linear-gradient(to bottom, transparent 50%, #ff9fa2 50%)', boxDecorationBreak :'clone', lineHeight : 1}} className="inline mb-10 text-5xl font-bold">Apprentissage & Professionnalisation</div>
                    </div>
                    <div className="text-xl">
                    En 2023, nous lançons une phase pilote afin d’évaluer l’impact de l’utilisation de l’impression 3D
                    sur la qualité des enseignements dans les lycées techniques au Cameroun. Les écoles et les
                    enseignants qualifiés dans nos technologies d’impression 3D auront la possibilité créer des
                    modèles, des kits didactiques et des prototypes physiques qui seront utilisés pour expliquer des
                    concepts complexes, pour démontrer des techniques et même pour équiper à faibles coûts les
                    laboratoires et salles de travaux pratiques

                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div id="Services">
                <div className="mb-10 flex items-center justify-center">
                    <div style={{ backgroundImage : 'linear-gradient(to bottom, transparent 50%, #ff9fa2 50%)', boxDecorationBreak :'clone', lineHeight : 1}} className="inline mb-10 text-6xl font-bold">Ce que nous Proposons</div>
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
                                        <span className="block text-2xl text-gray-800 font-semibold">(+237) 655 733 765</span>
                                    </div>
                                </div>
                                <div className="card_team_element flex gap-6">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-clair">
                                        <MaterialSymbolsMailRounded className = "w-7 h-7 color-orange-rouge" />
                                    </div>
                                    <div>
                                        <span className="block text-lg text-gray-500 mb-1">Adresse E-mail</span>
                                        <span className="block text-2xl text-gray-800 font-semibold">juniorseppo3@gmail.com</span>
                                    </div>
                                </div>
                                <div className="card_team_element flex gap-6">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-clair">
                                        <IonLogoLinkedin className = "w-7 h-7 color-orange-rouge" />
                                    </div>
                                    <div>
                                        <span className="block text-lg text-gray-500 mb-1">LinkedIn</span>
                                        <span className="block text-2xl text-gray-800 font-semibold">juniorseppo3@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <Resposable name = 'Dr TIOGUEM FRANCK' poste = 'Co-Fondateur' tel={'(+237) 655733765'} mail={'juniorseppo@gmail.com'} linkedin={'linkin.com'} />
                        <Resposable name = "KONO FRANCOISE" poste = "Assistante projet"/>
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