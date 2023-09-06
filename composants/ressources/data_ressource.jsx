
import ImageItem from "./image_item";


const getData = async () => {
    const response = await fetch('http://18.215.69.15:3000/api/ressources/', { cache : 'no-store'})
    const data = await response.json()

    if(!response.ok)  throw new Error('il y a une erreur dans le serveur')

    return data
}
export default async function RessourceField(){

    const data = await getData()
    console.log(data)

    return(
        <div className="column">
            {data.map((el, key) => <ImageItem key={key} data = {el} id={el.key}  />)}
        </div>
    )
}