import Image from "next/image";
import Container from "../composants/container";
import { AntDesignDeploymentUnitOutlined, CiBuilding, ClarityGroupLine } from "../composants/icons";

export default function Objectifs() {
    return(
        <section className='process' style={{padding : '125px 0'}} >
            <div className="vide"/>
            <Container cName="d-flex justify-content-center">
                <div className=" col-12 col-md-9 row p-0">
                    <div className="col-12 col-md-6 col-lg-6 p-0" >
                        <div className="haut">
                          <div className="label_titre" style={{textTransform : 'uppercase'}}>Phase pilote</div>
                          <h1 style = {{ fontFamily : 'Comfortaa'}}>Objectifs spécfiques 2023</h1>
                        </div>
                        <div>
                          <Element icon={<CiBuilding style = {{ height : 36, width : 34, color : '#C22127'}} />}> 
                          Installation de <span style={{color : "var(--bg-color-orange)", fontSize : 20, fontWeight : '600'}}>05 FabLabs</span> d{"'"}impression 3D dans <span style={{color : "var(--bg-color-orange)", fontSize : 18, fontWeight : '600'}}>05 écoles</span> d{"'"}enseignement technique du cameroun
                          </Element>
                          <Element icon={<AntDesignDeploymentUnitOutlined style = {{ height : 36, width : 34, color : '#C22127'}} />}> 
                              Deploiement d{"'"}une plateforme de partage de plus de <span style={{color : "var(--bg-color-orange)", fontSize : 20, fontWeight : '600'}}>200</span> ressources (Kits 3D, fiches didactiques)
                          </Element>
                          <Element icon={<ClarityGroupLine style = {{ height : 36, width : 34, color : '#C22127'}} />}> 
                              Renforcement des capacités de <span style={{color : "var(--bg-color-orange)", fontSize : 20, fontWeight : '600'}}>55</span> enseignants (modélisation & impression 3D, gestion du FabLabs)
                          </Element>
                           
                        </div>
                        <div className='bas'>
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3sNWwXiGAMcfuz1i3YkKO8d-tNUNE5wKtKOejuE4HW2K7g/viewform?embedded=true">
                          <button>
                              Devenir une école bénéficiaire
                          </button>
                          </a>
                        </div>
                        
                    </div>
                    <div className ="col-12 col-md-6 col-lg-6 p-0 d-flex justify-content-center align-items-center">
                        <div style={{width : '350px', height : 500, position : 'relative' }}>
                            <Image src={"/assets/images/cameroon.svg"} layout = {'fill'} />
                            <Point x = {44} y= {384} duree = {1} ville = "Douala" list={["Lycée Technique d'Akwa", "Lycée Technique de KOUMASSI"]} />
                            <Point x = {80} y= {300} duree = {1.2} ville = "Bafoussam" list={["Lycée Technique Canadien"]}/>
                            <Point x = {139} y= {365} duree = {1.4} ville = "Yaoundé" list={["Lycée Technique de NKOL BISSON"]}/>
                            <Point x = {230} y= {371} duree = {1.6} ville = "Bertoua" list={["Lycée Technique de NKOL BIKON"]}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


function Point({duree, x, y, list, ville}){
    const liste = list.map((el, key) => <li key={key}>{el}</li>)
    return (
       <div className="point" style={{position : 'absolute', top : `${y}px`, left : `${x}px` }}>
            <div style={{position : 'relative'}}>
                <div className="wave" style={{width : 20 + (4 * list.length), position : 'absolute', aspectRatio : '1', animationDuration : `${duree}s`}}></div>
                <div className="bg-special round" style={{ width : 20 + (4 * list.length), aspectRatio : '1', borderRadius : 15, display : 'flex', alignItems : 'center', justifyContent : 'center', color : 'white' }}>{list.length}</div>
                <div className="over">
                    <div style={{fontWeight : 500}}>{ville}</div>
                    {liste}
                </div>
            </div>
       </div>
    )
}
function Element ({icon, children}){
    return(
      <div className="element_li">
        <div className="icon">
          {icon}
        </div>
        <div>{children}</div>
      </div>
    )
  }