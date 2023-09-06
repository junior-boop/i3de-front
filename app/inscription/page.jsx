"use client"

import Container from "@/composants/container";
import { QuillChevronRight, RiGoogleFill } from "@/composants/icons";
import { useGlobalContext } from "@/context/global_context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useFirebase from "@/firebase/firebase";
import { ref, set } from "firebase/database";

export default function Login(){
    const [visible, setVisible] = useState(false)
    const [isLoaded, setIsloaded] = useState(false)
    const { Database } = useFirebase()

    const { handleReduceLogIn, LOGINCONTEXT, USERLOGININFO } = useGlobalContext()
    const {isLogin, setIsLogin} = LOGINCONTEXT
    const [userInfos, setUserInfos] = USERLOGININFO

    const router = useRouter()
     

    const handleSignUp = async (e) => {
        e.preventDefault()
        setIsloaded(true)
        const target = e.target


            const user = {
                name : target[0].value,
                surname : target[1].value,
                mail : target[2].value,
                tel : "+237"+target[3].value,
                pw : target[4].value,
                town : target[5].value,
                like : [''],
                share : [''],
            }
    
            let bodyContent = new FormData()

            for(let key in user){
                bodyContent.append(key, user[key])
            }

            try {
                console.log(bodyContent.get('pw'))
                const reponse = await fetch("http://18.215.69.15:3000/api/inscription/signin", {
                    method : 'POST',
                    body : bodyContent
                })
    
                if(reponse.ok) {
                    const {name, surname, mail, _id, pw, tel, town, like, share} = await reponse.json()
                    setUserInfos({name, surname, mail, _id, pw, tel, town, like, share})
                    handleReduceLogIn({name, surname, mail, _id})
                    setIsLogin(true)
                    // router.back()
                }
            } catch (error) {
                console.log(error, 1)
            } finally {
                setIsloaded(false)
            }
    
    }
    
    const handleLogin = async (e) => {
        e.preventDefault()
        setIsloaded(true)
        const target = e.target


        const user = {
            mail : target[0].value,
            pw : target[1].value,
        }

        const userText = `mail=${target[0].value}&pw=${target[1].value}`

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
           }

        try {
            const reponse = await fetch("http://18.215.69.15:3000/api/inscription/login", {
                method : 'POST',
                body : userText,
                headers : headersList
            })

            if(reponse.ok) {
                const {key, value} = await reponse.json()
                const { name, surname, mail, pw, tel, town, like, share} = value
                handleReduceLogIn({name, surname, mail, _id : key, pw})
                
                setTimeout(() => {
                    setUserInfos({name, surname, mail, _id : key, pw, tel, town, like, share})
                    setIsloaded(true)
                    setIsLogin(true)
                    router.back()
                }, 3000)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsloaded(false)
        }
    
    }

    useEffect(() => {

    })

    const handleGoogleSignIn  = async () => {
        try{
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <div>
            <div style={{background : '#fff9', display : isLoaded ? 'flex' : 'none'}} className="absolute top-0 left-0 w-full h-[100vh] z-50 items-center justify-center">
                <img src="./load.gif" alt="" className="w-24 h-24" />
            </div>
            <div id="login">
                
                <Container style={{ display : 'flex', alignItems : 'flex-start', justifyContent : 'center'}}>
                {
                    visible 
                        ? (
                        <div className="login">
                            <div style={{ marginBottom : 24, }}>
                                <h1 style={{ textAlign : 'center'}}>
                                    S{"'"}inscrire 
                                </h1>
                                <h3> en tant que particulier</h3>
                            </div>
                            <SignUp_Space onSubmit={handleSignUp} />
                            <div className="separation"><hr /><span>OU</span><hr /></div>

                            <div className="login_btn">
                                <button onClick={handleGoogleSignIn}>
                                        <div className="icon">
                                        <RiGoogleFill style = {{ width : '2rem', height : '2rem' }} />
                                        </div>
                                        <div className="text">
                                            Se connecter avec Google
                                        </div>
                                </button>
                            </div>
                            <div style={{ fontWeight : 500, padding: '18px 0' }}>
                                Si vous avez déjà un compte,<span className="click_ici" onClick={() => setVisible(false)}>  cliquez ici </span>
                            </div>
                        </div>) 
                        : (

                            <div className="login ">
                                <div style={{ marginBottom : 24, }}>
                                    <h1 style={{ textAlign : 'center'}}>
                                        Se connecter 
                                    </h1>
                                    <h3> en tant que particulier</h3>
                                </div>
                                <Login_Space onSubmit={handleLogin} />
                                <div className="separation">
                                    <hr />
                                    <span>OU</span>
                                    <hr />
                                </div>

                                <div className="login_btn">
                                    <button onClick={handleGoogleSignIn}>
                                            <div className="icon">
                                            <RiGoogleFill style = {{ width : '2rem', height : '2rem' }} />
                                            </div>
                                            <div className="text">
                                                Se connecter avec Google
                                            </div>
                                    </button>
                                </div>
                                <div style={{ fontWeight : 500, padding: '18px 0' }}>
                                    Créer un compte en<span className="click_ici" onClick={() => setVisible(true)}>  cliquant ici </span>
                                </div>
                            </div>
                        )
                }
                
                </Container>
            </div>
        </div>
    )
}

const SignUp_Space = ({ onSubmit }) => {
    
    const [tiroir, setTiroir] = useState(false)
    const [town, setTown] = useState('Yaounde')


    const Liste = ({ville}) => {
        return(
            <div className="px-[18px] py-3 hover:bg-slate-200" onClick={() => {setTown(ville), setTiroir(false)}}>
                {ville}
            </div>
        )
    }

    const listeHieght = () => {
        if(tiroir) return 'h-[350px]'
        else return 'h-[0px]'
    }
    
    const listeBorder = () => {
        if(tiroir) return 'border'
        else return ''
    }

    return (
         <div className="login_space">
            <form onSubmit={onSubmit}>
                <div className="champ">                    
                    <input type="text"  placeholder="Votre Nom" />
                </div>
                <div className="champ">                    
                    <input type="text"  placeholder="Votre Prenom" />
                </div>
                <div className="champ">                    
                    <input type="email" name="email" placeholder="Votre Adresse e-mail" />
                </div>
                <div className="champ">                    
                    <input type="tel" name="telephone" placeholder="Votre numero de telephone" />
                </div>
                <div className="champ">                    
                    <input type="password" name="password" placeholder="Votre mot de passe" />
                </div>
                <div className="champ relative">                    
                    <input type="text" name="password" value={town} readOnly/>
                    <div data-rotate = {tiroir} className="btn_tiroir absolute w-10 h-10 rounded-full bg-white border border-gray-400 flex items-center justify-center outline-none" onClick={() => setTiroir(!tiroir)}>
                        <QuillChevronRight  className = 'w-6' />
                    </div>
                    <div className={`liste absolute z-10 rounded-[16px] ${listeBorder()} border-gray-300 bg-white w-full translate-y-[10px]  overflow-x-hidden ${listeHieght()}`}>
                        <Liste ville={'Yaoundé'} />
                        <Liste ville={'Douala'} />
                        <Liste ville={'Bafoussam'} />
                        <Liste ville={'Bamenda'} />
                        <Liste ville={'Buea'} />
                        <Liste ville={'Limbé'} />
                        <Liste ville={'Ebolowa'} />
                        <Liste ville={'Ngaoudéré'} />
                        <Liste ville={'Garoua'} />
                        <Liste ville={'Bertoua'} />
                        <Liste ville={'Maroua'} />
                    </div>
                </div>
                <button type = "submit">Créer</button> 
            </form>
         </div>
    )
}

const Login_Space = ({onSubmit}) => {
    return (
         <div className="login_space">
            <form onSubmit={onSubmit}>
                <div className="champ">                    
                    <input type="email" name="email" placeholder="Votre Adresse e-mail" />
                </div>
                <div className="champ">                    
                    <input type="password" name="password" placeholder="Votre mot de passe" />
                </div>
                <button type="submit">Se connecter </button> 
            </form>
         </div>
    )
}


// junor3@uhjlijlk.ujhkju
// clkdjnckdfjvndkfjvndkjfvndkjf