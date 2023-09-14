export async function GET(){
    const response = await fetch('http://18.215.69.15:3000/api/ressources/', { cache : 'no-store' })
    const data = await response.json()

    if(!response.ok)  throw new Error('il y a une erreur dans le serveur')
    console.log(data);
    return new Response(JSON.stringify(data), { status : 201})
}
