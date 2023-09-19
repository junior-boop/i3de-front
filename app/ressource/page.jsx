
import Container from "@/composants/container"
import Ressource_btn from "@/composants/ressources/ressource_btn"
import Ressources_client from "@/composants/ressources/ressource_client"
import { Bannier_second } from "@/layouts/bannier"


const getData = async (searchParams) => {
    const response = await fetch('http://18.215.69.15:3000/api/ressources/', { cache : 'no-store' })
    const data = await response.json()

    if(!response.ok)  throw new Error('il y a une erreur dans le serveur')
    
    return data
}

export default async function RessourcePage({searchParams}){    
    
    console.log(searchParams)
    const Data = await getData(searchParams)

    return(
        <div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <Ressource_btn />
            </Bannier_second>
            <section id = 'ressource'>
            <Container>
                <Ressources_client data = {Data} params = {searchParams.search} />
            </Container>
            </section>
            
        </div>
    )
}








