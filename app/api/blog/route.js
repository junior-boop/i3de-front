 
 const user = []
 
 export async function POST(request){

 }

 export async function GET(request){
    const data = [
        {
            nom : 'Daniel Seppo Eke',
            ville : 'Yaounde',
            tel : '655733765',
            id : 1
        },
        {
            nom : 'Mbana Marie Frederic Grace',
            ville : 'Yaounde',
            tel : '677554433',
            id : 2
        }
    ]

    console.log(request)
    return new Response(JSON.stringify(data))
}