'use client'

export default function Mission(){
    return (
        <section id='presentation'>
            <div className="secteur">
                <div className="label_desc"> Notre mission</div>
                <div className="titre_desc"> Apprentissage & Professionnalisation</div>
            </div>
          <div className="container">
            
            <div className='secteur'>
              <div className="image">
                <img src="/image_banniere.jpg" alt="" height={'100%'} />
              </div>
              <div className="cercle">
                   Édition
                <span className="num">2023</span>
              </div>
            </div>
            <div className='secteur'>
              <div className="desc">
                
                <div className="text">
                  I3DE est une initiative (CAYSTI & MANLAB) qui a pour vocation de créer une industrie locale qui
                  renforce le capital humain et facilite l’accès à des outils (technologies et méthodes) innovants
                  basés sur l’impression 3D au service des secteurs économiques de croissance et de l’éducation
                  en particulier.
                </div>

                <div className="text">
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
    )
}