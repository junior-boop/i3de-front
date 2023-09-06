import Mail from "@/models/mail";
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}

export async function POST(request){
    const { mail } = await request.json()
    
    const NewsLettre = {
        mail : mail
    }
    
    console.log(mail)

    await NewsLettre.save()
    try { 
        
        return new Response(JSON.stringify('save'), { status: 201 })
    } catch(error){
        return new Response('Il y a une erreur', { status: 500 })
    }
}