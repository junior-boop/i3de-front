import Container from "@/composants/container"
import Titre from "@/composants/titre"
import Bannier from "@/layouts/bannier"
import Link from "next/link"

import moment from "moment"


const getData = async () => {
    const response = await fetch('http://18.215.69.15:3000/api/articles', { cache : 'no-store' })
    const data = await response.json()

    if(!response.ok) throw new Error('il y a une errreur dans le transfert')

    return data.reverse();
}


export default async function ActualitesRoot(){

    const data = await getData()

    const liste = data.map((el, key) => {
        const value = el.value
        console.log(value)

        const { images, titre, createdAt } = value.Item
        return <Article key={key} id = {el.key} image={images[0]} date={createdAt} titre={titre} />
    })
    return(
        <div>
            <Bannier name={'Blog'} />
            <Container>
                <Titre titre={'Dernières nouvelles'} className="font-semibold"/>
                <div className="lg:grid grid-cols-3 gap-3 mb-10 flex flex-col">
                    {
                        liste
                    }
                </div>

            </Container>
        </div>
    )
}

function Article({ titre, date, id, image}){

    const calculeDataEcart = (userData) => {
        const day = ['Dim','Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
        const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Novembre', 'Décembre']
    
        const thisDay = moment(Date.now()).dayOfYear()
        const date = moment(userData)
        const publicationYear = date.year()
        const thisYear = moment(Date.now()).year()
    
        const hrs = date.hours() < 10 ? "0"+date.hours() : date.hours()
        const min = date.minutes() < 10 ? "0"+date.minutes() : date.minutes()
        
    
        if(thisYear === publicationYear ){
            const ecart = thisDay - date.dayOfYear()
            

            console.log('cette annee')
            console.log(ecart) 
            
            if(ecart === 0) return "Aujourd'hui"
            if(ecart === 1) return "hier à " + hrs + " : " + min
            if(ecart > 1) return "Il y " + ecart + " jours à " + hrs + " : " + min
            if(ecart > 7) return "Il y " + Math.floor(ecart / 7) + " semaines à " + hrs + " : " + min
            if(ecart > 28) return "Il y " + Math.floor(ecart / 28) + " mois à " + hrs + " : " + min
        }
        if(thisYear > publicationYear ){
            const ecart = thisYear - publicationYear
            console.log('annee derniere')
            if(ecart === 1) return "Année dernière à " + hrs + " : " + min
        }
    
    }


    return (
        <Link href={'/blog/'+id} className=" lg:block w-full p-2 hover:bg-gray-50 rounded-2xl transition-all duration-300 flex gap-2 flex-row-reverse">
            <div>
                <div className="w-32 lg:w-full aspect-square lg:aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={image} alt="" className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="lg:mt-3 mb-4">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    { titre }
                </div>
                <div className="text-gray-500 font-semibold">
                    Publier le : {calculeDataEcart(date)}
                </div>
            </div>
        </Link>
    )
}