export default function Container({children, cName = '', style}){
    return (
        <div className={'container ' + cName} style = {{...style}}>
            {children}
        </div>
    )
}
