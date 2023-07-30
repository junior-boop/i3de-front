import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    return new Response('je suis inscription')
}

export async function POST(request){
    const {name, surname, mail, tel, pw, town, like, share } = await request.json()

    const user = {
        name, surname, mail, tel, pw, town, like, share
    }

    await connectToDB()
    const NewUser = new User({
        name, surname, mail, tel, pw, town, like, share
    })
    await NewUser.save()

    try { 
        return new Response(JSON.stringify(user), { status: 201 })
    } catch(error){
        return new Response('Il y a une erreur', { status: 500 })
    }
}