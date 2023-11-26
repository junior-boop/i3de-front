

export const GET = async () => {
    return new Response('je suis inscription')
}


export const POST = async (request) => {
    const {name, surname, mail, tel, pw, town} = await request.json()
    const user = {
        name,
        surname,  
        mail,
        tel,
        pw,
        town,
    }

    let bodyContent = new FormData()

    for(let key in user){
        bodyContent.append(key, user[key])
    }

    
    try {
        const reponse = await fetch(process.env.URL + "/inscription", {
            method : 'POST',
            body : bodyContent
        })

        if(reponse.ok) {
            const data = await reponse.json()
            console.log(data[0])
            return new Response(JSON.stringify(data[0]), { status: 201 })
        }
    } catch (error) {
        console.log(error, 1)
        return new Response('il y a une erreur', { status: 500 })
    } 

    console.log(bodyContent)
}