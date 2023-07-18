"use client"

import Container from "@/composants/container"
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare, QuillArrowLeft, QuillChevronLeft, QuillChevronRight } from "@/composants/icons"
import { useGlobalContext } from "@/context/global_context"
import { collection, doc, runTransaction } from "firebase/firestore"
import Link from "next/link"
import { useEffect } from "react"

import {useRouter} from "next/navigation"

export default function HandleRessource({params}){

    const { Database } = useGlobalContext()
    const router = useRouter()

    useEffect(() => {
        if(Database !== null){
            const docref = doc(Database, 'realisations', params['id-ressource']);
            ( async function(){
                // console.log('je suis la')
                try {
                    const newPopulation = await runTransaction(Database, async (transaction) => {
                    const resdoc = await transaction.get(docref);
                    if (!resdoc.exists()) {
                        throw "Document does not exist!";
                    }
                
                    return resdoc.data()
                    });
                
                    console.log("Population increased to ", newPopulation);
                } catch (e) {
                    // This will be a "population is too big" error.
                    console.error(e);
                }
            })()
        }
    }, [])

    console.log(params)
    return(
        <div>
            <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 12}}>
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
                    <Container cName="flex  gap-7">
                        <div className="card-ressource aspect-square mb-40 rounded-2xl">
                            <Slider />

                        </div>
                        <div className="card-ressource flex-1 p-4 flex flex-col justify-between rounded-2xl">
                            <div>
                                <div className="text-3xl font-semibold">
                                    Lorem ipsum dolor sit.
                                </div>
                                <div className="font-semibold">categorie</div>
                                <div className="text-base italic">auteur</div>
                                <div className="mt-5 font-semibold">Description</div>
                                <div className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem doloribus praesentium natus illum quia mollitia earum voluptate nisi, vero deserunt veniam omnis accusantium unde. Adipisci exercitationem temporibus vel repellat?</div>
                            </div>
                            <div className="border-t border-gray-100 pt-3">
                                
                                <div className="flex items-center">
                                    <Button icon={<BxsLike style = {{ width : 24, hieght : 24}} />} />
                                    <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 24, hieght : 24}} />}/>
                                    <Button icon={<MdiShare style = {{ width : 24, hieght : 24}} />}/>
                                </div>
                            </div>
                        </div>
                    </Container>
        </div>
    )
}


function Slider(){
    return(
        <div className="h-[100%]">
            <div className="relative overflow-hidden h-[100%]">
                <div className="w-48 aspect-square rounded-full bg-[#0000001a] flex items-center justify-end absolute top-[50%] translate-y-[-50%] left-0 translate-x-[-60%] overflow-hidden">
                    <button style={{outline : 'none'}} className="w-24 h-24 flex items-center justify-center outline-none">
                        <QuillChevronLeft className = "w-10 h-10" />
                    </button>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="w-48 aspect-square rounded-full bg-[#0000001a] flex items-center justify-start absolute top-[50%] translate-y-[-50%] right-0 translate-x-[60%] overflow-hidden">
                    <button style={{outline : 'none'}} className="w-24 h-24 flex items-center justify-center outline-none">
                        <QuillChevronRight className = "w-10 h-10" />
                    </button>
                </div>
            </div>
            <div>
                thumbl
            </div>
        </div>
    )
}

function Button({onClick, icon}){
    return(
        <button type="button" style={{outline : 'none'}} className="h-11 flex outline-none items-center gap-3 rounded-[50px] px-3 hover:bg-gray-100 transition-all duration-[300ms] active:scale-90" onClick={onClick}>
            {icon}
            <span>435</span>
        </button>
    )
}