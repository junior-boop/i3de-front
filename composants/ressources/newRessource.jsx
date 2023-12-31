"use client"

import { useEffect, useState } from "react";
import Container from "../container";
import { IcBaselineAddPhotoAlternate, MaterialSymbolsCloseRounded, QuillLoadingSpin } from "../icons";
import { useGlobalContext } from "@/context/global_context";
import { useRouter } from "next/navigation";
import generated_ID from "@/app/ressource/id_gen";
import moment from "moment/moment";
import useFirebase from "@/firebase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'


export default function New_Ressource(){

    const [base64, setBase64] = useState([]);
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [categorie, setCategorie] = useState('')
    const [save, setSave] = useState(false)
    const [btn_name, setBtn_name] = useState('Publier')
    const {Storages} = useFirebase()
    // const [img, setImg] = useState([])

    const { USERLOGININFO } = useGlobalContext()
    const Route = useRouter()

    const [userInfos, setUserInfos] = USERLOGININFO
    
    const handleInputChange = ({ target }) => {

        if (!target.files || !target.files[0]) return;


        for (let i = 0; i < target.files.length; i++) {
            let el = target.files[i]

            const FilesReader = new FileReader();
            FilesReader.readAsDataURL(el);
            FilesReader.addEventListener('load', (e) => {
                const obj = {
                    name: el.name,
                    image: e.target.result,
                    size: el.size,
                    image_id: generated_ID(),
                    image_target: el
                }
                // if(typeof window !== 'undefined'){
                //     console.log('je fonctionne 1')
                //     const reference = Storages
                //     const spaceRef = ref(reference, 'images/'+obj.name)
                //     uploadBytes(spaceRef, el).then((snapshot) => {
                //         console.log('je fonctionne 2')
                //         console.log('Uploaded a blob or file!');
                //         getDownloadURL(spaceRef, snapshot).then(url => {
                //             console.log('je fonctionne 3')
                //             setImg(el => [...el, url])
                //         })
                //     });
                // }
                setBase64(element => [...element, obj]);
            })
        }
    };

    const HandleSubmit = async () => {
        setSave(true)
        const bodyContent = new FormData()
        const  headersList = {
            "Accept": "*/*",
           }
        base64.forEach((el) => {
            bodyContent.append('image', el.image_target)
        })
        let response = await fetch("/api/images", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        if(response.ok) {
            const images = await response.json()
            handlePublication(images)
        }
        
    };

    const handleSuprimeImage = (id) => {
        const filter = base64.filter(el => id !== el.image_id)
        setBase64([...filter])
    }


    
    const handlePublication = (album_images) => {
        if(titre.length !== 0 && description.length !== 0 && categorie.length !== 0){

            let publication = {
                images : album_images, 
                titre : titre,
                description : description, 
                createdAt : new Date(),
                createdBy : {userId : userInfos._id},
                categorie : categorie,
                files : []
            };


            (async () => {
                const  headersList = {
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                   }
    
                let response = await fetch("/api/ressource/new", { 
                    method: "POST",
                    body: JSON.stringify(publication),
                    headers: headersList
                });
    
                if(response.ok) {
                    console.log('je vais bien')
                }
            })()

            
           } else {
               alert("Remplissez tous les champs avant de sauvegader")
               Route.refresh()
           }
    }

    useEffect(() => {
        if(save){
            setBtn_name("Enregistrement...")
            setTimeout(() => {
                setSave(false)
                setBtn_name("Enregisté")
                setTimeout(() => {
                    Route.push('/ressource')
                    // Route.replace('/ressource')
                }, 1000)
            }, 3000)
    
        }
    }, [save])

    return(
        <Container>
                <div className="left">
                    <div className="header">
                        Importer les images
                    </div>
                    <div className="content">
                        <div className="content_ressource">
                            {base64.map((el, key) => <ImageItem images={el} Supprimer={() => handleSuprimeImage(el.image_id)} key = {key} />)}
                            <ImportImages onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <div className="h3 mb-3 mt-2">
                            Description
                        </div>
                        <div className="titre_ressource">
                            <input type="text" onChange={({ target }) => setTitre(target.value)} placeholder="Titre de la réalisation" />
                        </div>
                        <div className="descrption_ressource">
                            <textarea onChange={({ target }) => setDescription(target.value)} placeholder="Description de la réalisation"></textarea>
                        </div>
                        <div className="categorie mb-2">
                            <h4>Categorie</h4>
                            <select name="categorie" onChange={({target}) => setCategorie(target.value)}>
                                <option value={''}>Choisir une categorie</option>
                                <option value={'fiche pedagogique'}>Fiche Pedagogique</option>
                                <option value={'modele 3d'}>Modele 3D</option>
                                <option value={'realisation'}>realisation</option>
                            </select>
                        </div>
                        <div className="details">
                            <div className="champ">
                                <span>Auteur</span>
                                <span>{userInfos?.length !== undefined ? userInfos?.surname.split(' ')[0] : ''} {userInfos.name}</span>
                            </div>
                            <div className="champ">
                                <span>Date</span>
                                <span>{moment().format('DD MMMM YYYY')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn_publier">
                        <button onClick={HandleSubmit} className="gap-3">
                            {
                                save
                                ? <QuillLoadingSpin className = "w-6 h-6 loader" />
                                : null
                            }
                            {btn_name}
                        </button>
                    </div>
                </div>
            </Container>
    )
}

function ImageItem({ images, Supprimer }) {
    return (
        <div className="ImageRessource">
            <img src={`${images.image}`} alt="" height={'100%'} />
            <button onClick={Supprimer}>
                <MaterialSymbolsCloseRounded style={{ height: 24, width: 24 }} />
            </button>
        </div>
    )
}

function ImportImages({ onChange }) {
    return (
        <div className="ImportImages">
            <input type="file" multiple onChange={onChange} />
            <IcBaselineAddPhotoAlternate style={{ width: 48, height: 48, color: '#999' }} />
            <div>Ajouter une Image</div>
        </div>
    )
}

