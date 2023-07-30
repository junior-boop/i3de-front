'use client'

import Container from "@/composants/container"
import { QuillChevronLeft, QuillChevronRight } from "@/composants/icons"
import Titre from "@/composants/titre"
import Bannier from "@/layouts/bannier"
import Link from "next/link"

export default function ActualitesRoot(){
    return(
        <div>
            <Bannier name={'Blog'} />
            <Container>
                <Titre titre={'Denières nouvelles'} className="font-semibold"/>
                <div className="grid grid-cols-3 gap-3 mb-10">
                    <Article />
                    <Article />
                    <Article />
                </div>

                <div className="flex item-center gap-4 mb-6 justify-center">
                    <div>
                        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-special">
                            <QuillChevronLeft className = "w-6 h-6 text-white" />
                        </button>
                    </div>
                    <div className="flex items-center font-semibold text-xl">
                        1 sur 1
                    </div>
                    <div>
                        <button className="w-11 h-11 rounded-full flex items-center justify-center bg-special">
                            <QuillChevronRight className = "w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function Article(){
    return (
        <Link href={'/blog/1234'} className="w-full p-2 hover:bg-gray-50 rounded-2xl transition-all duration-300">
            <div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <img src="/assets/images/photo-19.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="mt-3 mb-4">
                <div className="text-3xl font-bold text-gray-800">
                    le titre de l{"'"}article
                </div>
                <div className="text-gray-500 font-semibold">
                    Publier le : 12 avril 2023
                </div>
            </div>
        </Link>
    )
}