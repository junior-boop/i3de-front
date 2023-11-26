export const POST =  async (request) => {

    const  headersList = {
        "Accept": "*/*",
        }

    const message = await request.formData()

    let response = await fetch(process.env.URL + "/contact", { 
        method: "POST",
        body: message,
        headers: headersList
    });

    if(response.ok) {
        const res = await response.json()
        console.log(res)
        return new Response(JSON.stringify(res), { status : 201})
    } else {
    return new Response('il y a une erreur dans le server', { status : 501})

    }
}