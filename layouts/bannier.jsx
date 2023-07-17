export default function Bannier({name}){
    return(
        <div className="container-fluid bg-special">
            <div className="container">
                <div className="titre w-100 py-5 color-white">
                    {name}
                </div>
            </div>
        </div>
    )
}

export function Bannier_second({name, style, children}){
    return(
        <div className="container-fluid bg-special">
            <div className="container" style={style}>
                <div className="titre w-100 py-5 color-white">
                    {name}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}