'use client'
import Container from "@/composants/container"
import Ressource_btn from "@/composants/ressources/ressource_btn"
import Ressources_client from "@/composants/ressources/ressource_client"
import { Bannier_second } from "@/layouts/bannier"
import { useEffect, useState } from "react"


export default  function Ressource(){    
     const [Data, setData] = useState([])


    useEffect(() => {
        (async() => {
            const response = await fetch('/api/ressource', { cache : 'no-store' })
            const data = await response.json()

            if(!response.ok)  throw new Error('il y a une erreur dans le serveur')

            setData( el => [...el, data])
        })()
    }, [])

    return(
        <div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <Ressource_btn />
            </Bannier_second>
            <section id = 'ressource'>
            <Container>
                <Ressources_client data = {Data} />
            </Container>
            </section>
            
        </div>
    )
}








