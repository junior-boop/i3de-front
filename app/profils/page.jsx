
import Link from "next/link";
import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";

export default function Profils(){
    return(
        <>
        <Bannier name={'Profils'} />
        <Container>
        <div className="ressource">
                    <div className="option">
                        <div>
                            <ListElement onClick={() => setSearchState('tout')} titre = 'Profils' />
                            <ListElement onClick={() => setSearchState('fiche pedagogique')} titre = 'Activités'/>
                        </div>

                    </div>
                    {/* <RessourceField data = {data} /> */}
                </div>
        </Container>
        </>
    )
}


function ListElement({titre, onClick}){
    return(
        <div onClick={onClick} className="listeElement hover:bg-slate-200 px-2">
           {titre}
        </div>
    )
}