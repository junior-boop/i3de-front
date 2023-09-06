'use client'
import { QuillArrowLeft } from "./icons";
import { useRouter } from "next/navigation";

export default function BtnBack() {
    const router = useRouter()
    return(
        <div className="flex gap-4 items-center">
            <button className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center" onClick={() => router.back()} >
                <QuillArrowLeft className = "w-7 h-7"  />
            </button>
            <span className="font-bold">
                Back
            </span>
        </div>
    )
}