
import Link from "next/link";
import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";

export default function Inscription(){
    return(
        <>
        <Bannier name={'Inscription'} />
        <Container>
            <div className="vide"></div>
            <div className="inscription_section">
                <div className="cadre">
                    <div className="titre">Bénéficiez du programme</div>
                    <div>it is often said that the pursuance of integrated collection of software engineering standards minimizes influence of the setting of functional event(Heriberto Milard in the book of the application rules)</div>
                </div>
                <div className="cadre desc">
                    <div className="header">Particulier</div>
                    <div className="content">
                        <ul>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée  </li>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification </li>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                            <li>Le lorem ipsum est, en  utilisée à titre </li>
                        </ul>
                    </div>
                    <button className="footer">
                        <Link href={'/inscription'}>
                                Inscrivez-vous
                        </Link>
                    </button>
                </div>
                <div className="cadre desc">
                <div className="header">Etablissement bénéficiaire</div>
                    <div className="content">
                        <div>
                            <ul>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée  </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                                <li>Le lorem ipsum est, en  utilisée à titre </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                            </ul>
                        </div>
                        
                    </div>
                    <button className="footer">
                        <Link href={'/login'}>
                            Devenir une école bénéficiaire
                        </Link>
                    </button>
                </div>
            </div>

            <div className="vide"></div>
        </Container>
        </>
    )
}
