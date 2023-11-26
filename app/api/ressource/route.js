export async function GET(){
    const response = await fetch(process.env.URL + '/ressources')
    const data = await response.json()

    if(!response.ok)  throw new Error('il y a une erreur dans le serveur')
        console.log(data, 1);
    return new Response(JSON.stringify(data), { status : 201})
}
