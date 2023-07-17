import Link from "next/link";
import Container from "../composants/container";

export default function Edition(){
    return(
        <section id="edition" style={{backgroundImage : `url(./assets/prototype/prototype_1.jpg)`}}>
            <Container style={{position : 'relative', zIndex : 4}}>
            <div className="titre w-100 text-center pt-5 color-white "> Edition 2023</div>
            <div className="h2 w-100 text-center pb-5 color-white "> Focus sur l’éducation</div>
            <div style={{fontWeight : '500'}} className="h3 m-auto col-12 col-md-10 col-lg-7 py-5 text-center color-white">
            Nous lançons une phase pilote afin d’évaluer l’impact de l’utilisation de l’impression 3D sur la qualité des enseignements dans les lycées techniques au Cameroun.
            </div>
            <div className="w-100 d-flex justify-content-center">
                <Link href = '/'>
                    <button>
                        Devenir une école bénéficiaire 
                    </button>
                </Link>
            </div>
            </Container>
        </section>
    )
}