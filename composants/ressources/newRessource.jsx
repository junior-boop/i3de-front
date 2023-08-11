"use client"

import { useEffect, useState } from "react";
import Container from "../container";
import { IcBaselineAddPhotoAlternate, MaterialSymbolsCloseRounded, QuillLoadingSpin } from "../icons";
import { useGlobalContext } from "@/context/global_context";
import { useRouter } from "next/navigation";
import generated_ID from "@/app/ressource/id_gen";
import moment from "moment/moment";
// import FirebaseStatut from "@/firebase/firebase";
// import {ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function New_Ressource(){

    const [base64, setBase64] = useState([]);
    const [images, setImages] = useState([])
    const [titre, setTitre] = useState('')
    const [count, setCount] = useState(0)
    const [description, setDescription] = useState('')
    const [categorie, setCategorie] = useState('')
    const [save, setSave] = useState(false)
    const [btn_name, setBtn_name] = useState('Publier')

    const { USERLOGININFO } = useGlobalContext()
    // const dataBase = FirebaseStatut()
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
                setBase64(element => [...element, obj]);
            })
        }
    };

    const HandleSubmit =() => {
        setSave(true)
        base64.map(
            async (el) => {

            const image_object = {
                name : el.name,
                code_hex : el.image,
                mineType : el.name.split('.')[1]
            } 

            const  headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
               }

            let response = await fetch("/api/images", { 
                method: "POST",
                body: JSON.stringify(image_object),
                headers: headersList
            });

            if(response.ok) {
                setImages(el => [...el, image_object])
            }
            
        })
        
        setCount(base64.length)
        
    };

    const handleSuprimeImage = (id) => {
        const filter = base64.filter(el => id !== el.image_id)
        setBase64([...filter])
    }


    
    const handlePublication = () => {
        if(titre.length !== 0 && description.length !== 0 && categorie.length !== 0){

            let publication = {
                images : JSON.stringify(images), 
                titre : titre,
                description : description, 
                createdAt : new Date(),
                createdBy : {
                    name : userInfos.name,
                    surname : userInfos.surname,
                    user_id : userInfos.id
                },
                categorie : categorie,
                like : [""],
                share : [""],
                download : [""]
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
           }

           console.log('ville')
    }
   

    useEffect(() => {
        console.log(images.length, base64.length)
        if(images.length > 0 && images.length === base64.length){
            console.log('ville, 1')
           handlePublication()
        }
    }, [images])

    // save
   


    useEffect(() => {
        base64.length !== 0 ? base64 : []
    }, [base64, save])

    useEffect(() => {
        if(save){
            setBtn_name("Enregistrement...")
            setTimeout(() => {
                setSave(false)
                setBtn_name("Enregisté")
                setTimeout(() => {
                    Route.back()
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
                                {/* <span>{userInfos?.surname.split(' ')[0]} {userInfos.name}</span> */}
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

