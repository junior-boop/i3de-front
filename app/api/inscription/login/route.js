import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}

export async function POST(request){
    const { mail, pw }  = await request.json();
    
    try { 
        // const userText = `mail=${target[0].value}&pw=${target[1].value}`
        const bodyContent = `mail=${mail}&pw=${pw}`
        // let bodyContent = new FormData()
        // bodyContent.append("mail", mail)
        // bodyContent.append("pw", pw)
        

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
           }

        const connexion = await fetch("http://18.215.69.15:3000/api/inscription/login", {
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