import Container from "@/composants/container";
import New_Ressource from "@/composants/ressources/newRessource";

export default async function NewRessource() {
    return (
        <section id='newRessource'>
            <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 12}}>
                <Container style={{height : 58, borderBotttom : "1px solid silver"}} cName=" align-items-center">
                    <div className="text-4xl font-comforta font-bold">
                        Nouvelle Ressources
                    </div>
                </Container>
            </div>
            <New_Ressource />
        </section>
    )
}







