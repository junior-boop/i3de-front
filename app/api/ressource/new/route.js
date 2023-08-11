import { connectToDB } from "@/utils/database";
import Ressource from "@/models/ressources";


export function GET(){
    return new Response('je suis une nouvelle ressource', {status : 201})
}

export async function POST(request) {
    const {images, titre, description, createdAt, createdBy, categorie, like, share, download} = await request.json()

    const { name, surname, user_id } = createdBy

    try {
        const ressource = await new  Ressource({
            images, titre, description, createdAt, categorie, like, share, download, 
            createdBy : {
                name, surname, user_id
            }
        })

        console.log(ressource)

        await ressource.save()

    } catch ( reason ){
        console.log(reason)
    }
    
    return new Response(JSON.stringify(), {status : 201} )
}