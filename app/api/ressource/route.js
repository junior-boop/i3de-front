
import Ressource from "@/models/ressources";
import { connectToDB } from "@/utils/database";


export async function GET(){
    await connectToDB()


    try {

        const ressource = await Ressource.find({})
        // console.log(ressource)
        return new Response(JSON.stringify(ressource), {status : 201})

    } catch (reason) {
        console.log(reason)
        return new Response( 'il y a une erreur', {status : 500})
    }

}
