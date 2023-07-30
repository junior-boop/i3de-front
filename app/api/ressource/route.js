
import { connectToDB } from "@/utils/database";


export async function GET(){
    await connectToDB()
    console.log('je fonctionne')
    return new Response('Ressource')
}
