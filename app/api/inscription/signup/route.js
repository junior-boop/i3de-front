

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
        const reponse = await fetch("http://18.215.69.15:3000/api/inscription/signin", {
            method : 'POST',
            body : bodyContent
        })

        if(reponse.ok) {
            const data = await reponse.json()
            return new Response(JSON.stringify(data), { status: 201 })
        }
    } catch (error) {
        console.log(error, 1)
        return new Response('il y a une erreur', { status: 500 })
    } 

    console.log(bodyContent)
}