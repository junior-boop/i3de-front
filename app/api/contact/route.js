export const POST =  async (request) => {

    const  headersList = {
        "Accept": "*/*",
        }

    const message = await request.formData()
    console.log(message)

    let response = await fetch("http://18.215.69.15:3000/api/contact", { 
        method: "POST",
        body: message,
        headers: headersList
    });

    if(response.ok) {
        const res = await response.json()
        return new Response(JSON.stringify(res), { status : 201})
    } else {
    return new Response('il y a une erreur dans le server', { status : 501})

    }
}