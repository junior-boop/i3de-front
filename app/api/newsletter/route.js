export const POST = async (request) =>  {
    const bodyParse = await request.formData()

    const NewsLettre = {
        save : async () => {
            const response = await fetch(process.env.URL + '/newsletter', {
                method : 'POST',
                body : bodyParse
            })

            if(response.ok) return 'OK'
            return "Probleme"
        }
    }
    

    try { 
        const response = await NewsLettre.save()

        if(response === 'OK') {
            return new Response(JSON.stringify('save'), { status: 201 })
        }

        return new Response(JSON.stringify('Probleme'), { status: 501 })        
    } catch(error){
        return new Response('Il y a une erreur', { status: 500 })
    }
}