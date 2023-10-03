import Contact_form from "@/composants/contact_form";
import Container from "@/composants/container";
import Bannier from "@/layouts/bannier";

export default function Contact(){
    return(
        <div className="">
            <Bannier name={'Contactez-nous'} />
            <div className="vide"></div>
            <Container>
                <div className="flex lg:flex-row flex-col gap-4 pt-5 ">
                    <div className="flex-1">
                        <div className="text-5xl font-bold font-comforta">Contactez notre équipe</div>
                        <div className="mt-4 text-lg">it is often said that the pursuance of integrated collection of software engineering standards minimizes influence of the setting of functional event(Heriberto Milard in the book of the application rules)</div>
                    </div>
                    <Contact_form />
                </div>
                <div className="vide"></div>
            </Container>
        </div>
    )
}