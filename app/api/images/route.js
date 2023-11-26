
export const GET = async () => {

    return new Response('je vasi voir apres')
}

export const POST =  async (request) => {

    const  headersList = {
        "Accept": "*/*",
        }

    const images = await request.formData()
    console.log(images)

    let response = await fetch(process.env.URL + "/multiple_images", { 
        method: "POST",
        body: images,
        headers: headersList
    });

    if(response.ok) {
        const res = await response.json()
        return new Response(JSON.stringify(res), { status : 201})
    } else {
    return new Response('il y a une erreur dans le server', { status : 501})

    }
}
