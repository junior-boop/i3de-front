"use client"

import Container from "@/composants/container";
import { QuillArrowLeft } from "@/composants/icons";
import { useRouter} from 'next/navigation'


export default function ActualiteIdRoot({params}) {

    const router = useRouter()

    return(
        <div>
            <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 28}}>
                <Container style={{display : 'flex', height : 56, orderBotttom : "1px solid silver", flexDirection : 'column', gap : 16}} >
                    <div>
                        <div className="flex gap-4 items-center">
                            <button className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center" onClick={() => router.back()} >
                                <QuillArrowLeft className = "w-7 h-7"  />
                            </button>
                            <span className="font-bold">
                                Back
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
            <div>
                <div className="flex items-center justify-center py-5">
                    <span className="block text-center font-bold font-comfortaa text-5xl w-[80vmin]">
                        titre Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, numquam.
                    </span>
                </div>
                <div>
                    <div className=" w-full aspect-[16/9] overflow-hidden rounded-2xl">
                        <img src="/assets/images/photo-19.jpg" alt="" className="w-full h-full object-cover"  />
                    </div>
                </div>
            </div>

            <div className="contenu mx-auto my-9 w-[80vmin] ">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores earum quidem.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus optio vitae earum vel ratione totam, voluptates cupiditate animi harum magni accusantium fugit numquam ab ut, molestias tenetur illum adipisci.
                </p>
                <div>
                    <img src="/assets/images/photo-19.jpg" alt=""  />
                </div>
                <span className="legende"> legende</span>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis deleniti ducimus tempora.</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic eveniet eum.</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eius est nemo!</h4>
                
                <q>
                    Une citation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos atque error alias dolorem.
                </q>
                <span className="legende">le non de la personne</span>

                <ul>
                    <li>liste dse element 1er possition</li>
                    <li>liste dse element 2eme possition</li>
                    <li>liste dse element 3eme possition</li>
                    <li>liste dse element 4eme possition</li>
                    <li>liste dse element 5eme possition</li>
                </ul>
            </div>
            </Container>
        </div>
    )
}