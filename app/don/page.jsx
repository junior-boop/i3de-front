import Titre from "@/composants/titre";
import Bannier from "@/layouts/bannier";

export default function Actualite (){
    return(
        <>
            <Bannier name={"Faites un don"} />
            <div className={"container"}>
                <div className="vide"/>
                
                <div className="row">
                    <div className="col-12 col-md-6 py-3">
                        <Titre titre={'Pourquoi faire un don à l\'I3DE ?'} />
                        <p style={{fontSize : 18, fontWeight : 400}}>Les dons jouent un rôle crucial dans la création de ​laboratoires de fabrication numérique et l{"'"}acquisition d{"'"}​imprimantes 3D pour améliorer la professionnalisation de l{"'"}enseignement technique. Ces dons permettent de financer l{"'"}achat d{"'"}équipements de pointe, tels que des imprimantes 3D, des ​découpeuses laser et des ​machines CNC, qui sont essentiels pour former les ​étudiants aux technologies modernes utilisées dans l{"'"}industrie. En offrant aux étudiants la possibilité de travailler avec ces équipements, les dons permettent une expérience pratique précieuse, renforcent les compétences techniques et favorisent une meilleure compréhension des concepts enseignés. De plus, ces ressources avancées favorisent l{"'"}innovation, la créativité et encouragent les étudiants à développer des compétences du XXIe siècle telles que la résolution de problèmes, la collaboration et la pensée critique. En rendant l{"'"}enseignement Technique pratique et professionnels , les dons contribuent à donner au apprenant un avantage compétitif sur le marché du travail et à répondre aux demandes croissantes des industries modernes.</p>
                    </div>
                    <div className="col-12 col-md-6 py-3">
                        <img src="https://img.lemde.fr/2020/02/21/708/0/4256/2125/1440/720/60/0/e841663_s6EVtQW-vfQHytU4PLjw_Igy.jpg" className="w-full aspect-square object-cover rounded-xl" alt ='rien'/>
                    </div>
                </div>
            </div>
            <section className="container-fluid bg-clair py-5 mt-16" >
                <div className="container">
                    <Titre titre={"Faire un don maintenant"} className="mx-auto" />
                    <div className="w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 items-center">
                        <div className="block lg:flex-1 bg-special p-4 rounded-2xl h-64 w-full">
                            <div className="w-[40%]">
                                <img src="/Mtn_money.png" width={'100%'} alt = "image" />
                            </div>
                        </div>
                        <div className="block lg:flex-1 bg-special p-4 rounded-2xl h-64 w-full">
                            <div className="w-[50%]">
                                <img src="/orange.png" width={'100%'} alt = 'image' />
                            </div>
                        </div>
                        <div className="block lg:flex-1 bg-special p-4 rounded-2xl h-64 w-full">
                            <div  className="w-[50%]">
                                <img src="/paypal.png" width={'100%'} alt = 'image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}