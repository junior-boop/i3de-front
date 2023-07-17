import Container from "../composants/container";

export default function Testimony(){
    return (
        <section className='testimony' style={{padding : '120px 0'}} >
          <Container>
            <div className="haut">
              <div className="temoinage_label">TEMOIGNAGES</div>
              <h1>Ils en parlent</h1>
            </div>
            <div className="bas">

             <Temoin texte={"J’apprécie à sa juste valeur l’intérêt que vous accorder à la qualité de formation des Jeunes Camerounais"} auteur={"Dr NALOVA LYONGA"} image={'/Nalova-Lyonga.jpg'} poste={"Ministre des Enseignements Secondaires"} />
             <Temoin texte={"Je vous exprime ma grande satisfaction de vous voir contribuer aux cotés de PRICNAC à faire avancer la dynamique de la recherche et de l’innovation et de la Culture du numérique en Afrique Centrale. Nul doute que nos efforts conjugués nous permettront de mener cette grande ambition à produire des effets considérables pour la sous-région"} auteur={"Pr. Aissatou SY-WONYU"} image={'/A-SY-WONYU-AUFportraitsgris-6-copie.jpg'} poste={"Directrice Régionale de l’AUF"} />
             <Temoin texte={"C’est une excellente initiative, pratique et claire qui démontre que l’importe du secteur privé pour soutenir l’écosystème de la formation "} auteur={"LUDOVIC SIGNARBIEUX"} image={'/picture-14377-1513110695.jpg'} poste={"Global Partnership for Education"} />
             
            </div>
          </Container>
      </section>
    )
}


function Temoin({texte, image, auteur, poste}){
    return(
      <div className="temoin">
        <div className="text">
          "{texte}"
        </div>
        <div className="image">
          <div className="img" style={{backgroundImage : `url(${image})`}}>
  
          </div>
        </div>
        <div className="auteur">{auteur}</div>
        <div className="poste">{poste}</div>
  
      </div>
    )
  }


const quote = {display : "inline-block", fontSize : 36, fontWeight : 700, position : 'relative', height : 20}