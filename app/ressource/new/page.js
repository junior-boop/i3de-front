"use client"

import Container from "@/composants/container";
import { useEffect, useState, useContext } from "react";
// import Link from "next/link";

// import { IcBaselineAddPhotoAlternate, MaterialSymbolsCloseRounded } from "../../composants/icons";
import generated_ID from "../id_gen";
// import Global_context from "../../context/global_context";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {collection, getDoc, addDoc, setDoc, doc, Timestamp} from 'firebase/firestore'
import { useRouter } from "next/navigation";
import { IcBaselineAddPhotoAlternate, MaterialSymbolsCloseRounded } from "@/composants/icons";
import Global_context from "@/context/global_context";
import Titre from "@/composants/titre";

export default function NewRessource() {
    const [base64, setBase64] = useState([]);
    const [images, setImages] = useState([])
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [categorie, setCategorie] = useState('')
    const [count, setCount] = useState(0)
    const [save, setSave] = useState(true)

    const { Storages, Database } = useContext(Global_context)
    const Route = useRouter()


    
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
                setBase64(element => [...element, obj]);
            })
        }
    };

    const HandleSubmit =() => {
        if (Storages !== null) {
         base64.map(async (el) => {
                const imageRef = ref(Storages, `images/${el.name + Date.now()}`)
                await uploadBytes(imageRef, el.image_target).then( element => {
                    getDownloadURL(element.ref).then(url => {
                        const obj = {
                            name: el.name,
                            image: url,
                            size: el.size
                        }

                        setImages(el => [...el, obj])
                        
                    })
                })

                
            })
            
            setCount(base64.length)
            
        }
    };

    const handleSuprimeImage = (id) => {
        const filter = base64.filter(el => id !== el.image_id)
        setBase64([...filter])
    }

    const AddRealisation = async (ref, obj) => {
        return await setDoc(ref, obj, { merge: true })
    }

   

    useEffect(() => {
        if(images.length > 0 && images.length === base64.length){
            console.log(true)
           if(titre.length !== 0 && description.length !== 0 && categorie.length !== 0){
            let publication = {
                images : JSON.stringify(images), 
                titre : titre,
                description : description, 
                createdAt : Timestamp.fromDate(new Date()),
                createdBy : '',
                categorie : categorie,
                like : [""],
                share : [""],
                download : [""]
            }

            if(Database !== null){
                const realisationRef = collection(Database, "realisations")
                AddRealisation(doc(realisationRef), publication).then(() => {
                   if(typeof window !== 'undefined'){
                        location.pathname = '/ressource'
                   }
                })
            }
           } else {
            alert("remplisser les donnees")
           }
        }
    }, [images])

    // save
   


    useEffect(() => {
        base64.length !== 0 ? base64 : []
    }, [base64, save])

    return (
        <>
            <div className="vide"></div>
            <section id='newRessource'>
                <div style={{borderBottom : "1px solid #f1f1f1", marginBottom : 12}}>
                    <Container style={{height : 137, borderBotttom : "1px solid silver"}} cName=" align-items-center">
                        <div className="titre">
                            Nouvelle Ressources
                        </div>
                    </Container>
                </div>
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
                            <div className="categorie">
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
                                    <span>Daniel Seppo Eke</span>
                                </div>
                                <div className="champ">
                                    <span>Date</span>
                                    <span> 21 Mars 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="btn_publier">
                            <button onClick={HandleSubmit}>
                                Publier
                            </button>
                        </div>
                    </div>
                </Container>
            </section>

        </>
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



export function NotificationView({ open }) {
    return (
        <div className="notificationView" data-open={open}>
            <div className="notificationHeader">
                <span>Les Notifications</span>
            </div>
            <div className="notificationContent">
                <div className="contentVide">
                    <span>Notification vide</span>
                </div>
            </div>
        </div>
    )
}


