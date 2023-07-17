export default function Titre({titre, className = "", style}){
    return(
        <div className={"h1 w-100 my-5" + className} style={style}>
            {titre}
        </div>
    )
}