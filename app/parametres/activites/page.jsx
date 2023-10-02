import Titre from "@/composants/titre";

const getData = async () => {
    const ressource = await fetch('http://18.215.69.15:3000/api/ressources/', { caches : 'no-store'})
    const data = await ressource.json()

    if(ressource.ok) return data
    else console.log(' il ya une erreur au niveua du serveur ')
}

export default async function Activites(){

    const data = await getData()
    console.log(data)

    return(
        <>
            <div className="w-full">
                <Titre titre={'Activités'} className="mt-0" />
                <div className="p-6 bg-slate-100 w-full mb-3">
                    Dans cette page vous pouvez avoir la liste des activités et interactions que vous effectuez sur la plate-forme
                </div>
                <div>
                    <div className="border border-slate-200 w-full p-4 rounded-sm">
                        <div className="text-lg font-semibold">Nom de la ressource</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

