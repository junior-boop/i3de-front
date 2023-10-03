'use client'

export default function Contact_form(){
    const handleSubmit = async (e) => {
        e.preventDefault() 

        const target = e.target

        const obj = {
            name : target[0].value,
            surname : target[1].value,
            ville : target[2].value,
            tel : target[3].value,
            mail : target[4].value,
            message : target[5].value,
        }

        const bodyContent = new FormData()
        for(let key in obj){
            bodyContent.append(key, obj[key])
        }


        const sender = await fetch('/api/contact', {
            method : 'POST',
            body : bodyContent

        })
        const data = await sender.json()


        if(sender.ok) {
            console.log(data)
            console.log('everything is ok')
        }
    }

    return(
        <div className="flex-[2] bg-[#f3f3f3] rounded-2xl overflow-hidden">
            <div className="p-4 ">
                <form action="" onSubmit={handleSubmit} >
                    <div className="flex gap-4 items-center ">
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Nom*</label>
                            <input type="text" className="block w-full px-4 py-3 rounded-lg bg-slate-200 text-lg outline-none" placeholder="Votre nom" required/>
                        </div>
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Prénom</label>
                            <input type="text" className="block w-full px-4 py-3 rounded-lg  bg-slate-200 text-lg outline-none" placeholder="Votre prénom" />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Ville de résidence*</label>
                            <input type="text" className="block w-full px-4 py-3 rounded-lg bg-slate-200 text-lg outline-none" placeholder="Votre ville de résidence" required/>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Numéro de téléphone (format : XXX XXX XXX)</label>
                            <input type="tel" pattern="[0-9]{3} [0-9]{3} [0-9]{3}" className="block w-full px-4 py-3 rounded-lg bg-slate-200 text-lg outline-none" placeholder="Veillez saisir votre numero de téléphone, exemple : 655 766 877" required/>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Adresse e-mail*</label>
                            <input type="email" className="block w-full px-4 py-3 rounded-lg bg-slate-200 text-lg outline-none" placeholder="Votre adresse e-mail" required/>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                        <div className="flex-1 ">
                            <label htmlFor="" className="block text-base font-semibold">Message*</label>
                            <textarea className="block w-full px-4 py-3 rounded-lg bg-slate-200 text-lg outline-none h-44" placeholder="Votre Message" cols={30} required>
                            </textarea>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-4 relative h-[40px]">
                        <button className="absolute left-[-20px] bottom-[-20px] lg:w-[105.5%] w-[112%] p-4 bg-[#c12227] font-bold text-white text-base outline-none" style={{ outline : 'none', border : "none"}}>
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}