
import Container from "@/composants/container"
import Ressource_btn from "@/composants/ressources/ressource_btn"
import Ressources_client from "@/composants/ressources/ressource_client"
import { Bannier_second } from "@/layouts/bannier"



const getData = async () => {
    const response = await fetch('http://18.215.69.15:3000/api/ressources/', { next : { revalidate : 3600} })
    const data = await response.json()

    if(!response.ok)  throw new Error('il y a une erreur dans le serveur')

    return data
}


export default async function Ressource(){    
     
    const data = await getData()

    return(
        <div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <Ressource_btn />
            </Bannier_second>
            <section id = 'ressource'>
            <Container>
                <Ressources_client data = {data} />
            </Container>
            </section>
            
        </div>
    )
}








