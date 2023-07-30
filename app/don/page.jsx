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
                        <p style={{fontSize : 18, fontWeight : 600}}>After decades of hard work, cultural diversity remains under attack and new forms of intolerance, rejection of scientific facts and threats to freedom of expression challenge peace and human rights. Our mission is as critical as ever so help us bring change.</p>
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