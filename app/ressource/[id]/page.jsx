import Container from "@/composants/container"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare, QuillArrowLeft, QuillChevronLeft, QuillChevronRight, QuillLoadingSpin } from "@/composants/icons"
import Link from "next/link"
import DetailsRessource from "@/composants/ressources/detailsRessource"
import Slider from "@/composants/slider"
import { data } from "autoprefixer"

const getData = async (id) => {
    const response = await fetch('http://18.215.69.15:3000/api/ressources/'+id)
    const data = await response.json()
    return data
}


export default async  function HandleRessource({params}){
    const { id } = params
    const Data = await getData(id)
    return(
        <div>
            <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 28}}>
                    <Container style={{display : 'flex', height : 56, borderBotttom : "1px solid silver", flexDirection : 'column', gap : 16}} >
                        <div>
                            <div className="flex gap-4 items-center">
                                <Link href={'/ressource'} className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center"  >
                                    <QuillArrowLeft className = "w-7 h-7"  />
                                </Link>
                                <span className="font-bold">
                                    Back
                                </span>
                            </div>
                        </div>
                    </Container>
                </div>
                    <Container cName="flex gap-7">
                        <div className="card-ressource aspect-square mb-40 rounded-2xl">
                            <Slider images={Data?.images} />
                        </div>
                        <DetailsRessource data = {Data} />
                    </Container>
        </div>
    )
}




