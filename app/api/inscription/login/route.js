import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}

export async function POST(request){
    const { mail, pw }  = await request.json();
    
    try { 
        // const userText = `mail=${target[0].value}&pw=${target[1].value}`
       
        let bodyContent = new FormData()
        bodyContent.append("mail", mail)
        bodyContent.append("pw", pw)

        console.log(mail, pw)
        

        let headersList = {
            "Accept": "*/*",
            // "Content-Type": "application/x-www-form-urlencoded"
           }

        const connexion = await fetch(process.env.URL + "/connexion", {
            method : 'POST',
            body : bodyContent,
            headers : headersList
        })
       
        const userExist = await connexion.json()

        if(!userExist){
            return new Response('userExist', { status : 201})
        }
        return new Response(JSON.stringify(userExist), { status: 201 })
    } catch(error){
        return new Response('Il y a une erreur', { status: 500 })
    }
}