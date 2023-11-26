export const GET = async (request) => {

    const url = new URL(request.url)
    const pathname = url.pathname
    const key = pathname.split('/')
    const key_value = key.at(-1)

    try {
        const response = await fetch(process.env.URL + "/users/" + key_value, { cache : "no-store"})
        const responseJson = await response.json()

        console.log(responseJson[0])

        const {userId, user_name, user_subname, user_telephone, user_password, user_mail, user_town} = responseJson[0]
        if(response.ok) {
            return new Response(JSON.stringify({name : user_name, surname : user_subname, mail : user_mail, pw : user_password, tel : user_telephone, town : user_town, _id : userId}), { status : 201})
        }
    } catch (error) {
        console.log(error)
        return new Response('il y a une erreur', { status : 500})
    }

}
export const POST = async (request) => {

    const url = new URL(request.url)
    const pathname = url.pathname
    const key = pathname.split('/')
    const key_value = key.at(-1)

    const bodyContent = await request.formData()

    try {

        let headersList = {
            "Accept": "*/*",
        }

        const response = await fetch(process.env.URL + "/inscription/" + key_value, { 
            method: "PUT",
            body: bodyContent,
            headers: headersList
          })
        const responseJson = await response.json()

        const {name, surname, mail, pw, tel, town, key} = responseJson
        if(response.ok) {
            return new Response(JSON.stringify({name, surname, mail, pw, tel, town, _id : key}), { status : 201})
        }
        
    } catch (error) {
        console.log(error)
        return new Response('il y a une erreur', { status : 500})
    }

}