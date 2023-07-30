import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}

export async function POST(request){
    const {mail, pw} = await request.json()
    await connectToDB()

    const userExist = await User.findOne({mail : mail})

    if(!userExist){
        console.log('user not exist')
        return new Response('user not exist', { status : 201})
    }
    console.log(userExist)
    try { 
        return new Response(JSON.stringify(userExist), { status: 201 })
    } catch(error){
        return new Response('Il y a une erreur', { status: 500 })
    }
}