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
                        <p style={{fontSize : 18, fontWeight : 600}}>Les dons jouent un rôle crucial dans la création de ​laboratoires de fabrication numérique et l{"'"}acquisition d{"'"}​imprimantes 3D pour améliorer la professionnalisation de l{"'"}enseignement technique. Ces dons permettent de financer l{"'"}achat d{"'"}équipements de pointe, tels que des imprimantes 3D, des ​découpeuses laser et des ​machines CNC, qui sont essentiels pour former les ​étudiants aux technologies modernes utilisées dans l{"'"}industrie. En offrant aux étudiants la possibilité de travailler avec ces équipements, les dons permettent une expérience pratique précieuse, renforcent les compétences techniques et favorisent une meilleure compréhension des concepts enseignés. De plus, ces ressources avancées favorisent l{"'"}innovation, la créativité et encouragent les étudiants à développer des compétences du XXIe siècle telles que la résolution de problèmes, la collaboration et la pensée critique. En rendant l{"'"}enseignement Technique pratique et professionnels , les dons contribuent à donner au apprenant un avantage compétitif sur le marché du travail et à répondre aux demandes croissantes des industries modernes.</p>
                    </div>
                    <div className="col-12 col-md-6 py-3">
                        <img src="https://img.lemde.fr/2020/02/21/708/0/4256/2125/1440/720/60/0/e841663_s6EVtQW-vfQHytU4PLjw_Igy.jpg" width={'100%'} alt ='rien'/>
                    </div>
                </div>
            </div>
            <section className="container-fluid bg-clair py-5" style={{ margin : '64px 0'}}>
                <div className="container">
                    <Titre titre={"Faire un don maintenant"} className="mx-auto" />
                    <div className="row col-12 col-md-6 m-auto m-sm-0 p-0" style={{gap : 24}}>
                        <div className="col-12 col-md-5 p-0 ">
                            <div className="d-flex bg-special align-items-center p-4 round pay">
                                <div className="col-6">
                                    <img src="/Mtn_money.png" width={'100%'} alt = "image" />
                                </div>
                                <div className="col-6">
                                    <img src="/orange.png" width={'100%'} alt = 'image' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 p-0">
                            <div  className="d-flex bg-special align-items-center p-4 round pay">
                                <img src="/paypal.png" width={'100%'} alt = 'image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}