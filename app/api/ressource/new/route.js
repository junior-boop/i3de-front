export function GET(){
    return new Response('je suis une nouvelle ressource', {status : 201})
}

export async function POST(request) {
    const publication = await request.json()

    const  headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }

       console.log(publication)

    let response = await fetch("http://18.215.69.15:3000/api/ressources", { 
        method: "POST",
        body: JSON.stringify(publication),
        headers: headersList
    });

    if(response.ok) {
        console.log('je vais bien')
        return new Response(await response.json(), {status : 201} )
    } else {
        return new Response('ville vide', {status : 501} )
    }
}