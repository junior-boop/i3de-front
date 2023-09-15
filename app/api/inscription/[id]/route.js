export const GET = async (request) => {

    const url = new URL(request.url)
    const pathname = url.pathname
    const key = pathname.split('/')
    const key_value = key.at(-1)

    try {
        const response = await fetch("http://18.215.69.15:3000/api/inscription/" + key_value, { cache : "no-store"})
        const responseJson = await response.json()

        const {name, surname, mail, pw, tel, town, key} = JSON.parse(responseJson)
        if(response.ok) {
            return new Response(JSON.stringify({name, surname, mail, pw, tel, town, _id : key}), { status : 201})
        }
    } catch (error) {
        console.log(error)
        return new Response('il y a une erreur', { status : 500})
    }

}