import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}


export const POST = async (request) => {
    const userData = await request.json()
    // const user = {
    //     name : userData.value,
    //     surname : target[1].value,
    //     mail : target[2].value,
    //     tel : "+237"+target[3].value,
    //     pw : target[4].value,
    //     town : target[5].value,
    // }

    // let bodyContent = new FormData()

    // for(let key in user){
    //     bodyContent.append(key, user[key])
    // }

    // try {
    //     const reponse = await fetch("http://18.215.69.15:3000/api/inscription/signin", {
    //         method : 'POST',
    //         body : bodyContent
    //     })

    //     if(reponse.ok) {
    //         const data = await reponse.json()
    //         return new Response(JSON.stringify(data), { status: 201 })
    //         // router.back()
    //     }

       
        
    // } catch (error) {
    //     console.log(error, 1)
    //     return new Response('il y a une erreur', { status: 500 })
    // } 

    return new Response('ville')
}