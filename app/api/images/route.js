import Image from "@/models/images"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    try {
        await ConnectToDB()
        const images = await Image.find({}).populate('name')
        console.log(images)
        return new Response(JSON.stringify(images), {status : 201})
    } catch (error) {
        console.log(error)
    }

}

export const POST =  async (request) => {
    const {name, code_hex, mineType} = await request.json()
    try {
        await ConnectToDB()
        const newImage = new Image({
            name , code_hex, mineType
        })

        // await newImage.save()

        return new Response(JSON.stringify(newImage), {status : 201})
    } catch (error) {
        console.log(error)
    }
}