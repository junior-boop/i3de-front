'use client'
import { IS_LOGIN, IS_LOGOUT } from "@/reduce/constante";
import { LoginReduce, initialState } from "@/reduce/globalReduce";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import UseFirebase from "@/firebase/firebase";

const Global_context = createContext()


const useGlobalContext = () => {
    return useContext(Global_context)
}

function Global_context_Provider({children}){

    const [state, dispatch] = useReducer(LoginReduce, initialState)

    const [isLogin, setIsLogin] = useState(false),
        LOGINCONTEXT = {isLogin, setIsLogin}


    const [userInfos, setUserInfos] = useState({}),
        USERLOGININFO = [userInfos, setUserInfos]
    
       

    const handleUser = async (data) => {

        try {
            const response = await fetch("http://18.215.69.15:3000/api/inscription/" + data.key, { cache : "no-store"})
            const responseJson = await response.json()
            console.log(responseJson)

            const {name, surname, mail, pw, tel, town, key} = responseJson
            if(response.ok) {
                setUserInfos({name, surname, mail, pw, tel, town, _id : key})

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const ls = localStorage
            const key = 'i3de_login'

            
            if(ls.getItem(key) !== null && ls.getItem(key).length >= 10){
                const ls_data = JSON.parse(ls.getItem(key))

                console.log(ls_data)
                
                handleUser({ mail : ls_data.mail, key : ls_data.id })
                setIsLogin(true)
            }
        }
    }, [])

    const handleReduceLogIn = (data) => {
        const user =  {
          name : data.name,
          surname : data.surname,
          mail : data.mail,
          id : data._id
        }

        console.log(user)
        dispatch({type : IS_LOGIN, payload : user})
      }

    
    const handleReduceLogOut = () => {
        setIsLogin(false)
        dispatch({type : IS_LOGOUT})
    }

    return(
        <Global_context.Provider value={{
            handleReduceLogIn,
            handleReduceLogOut,
            LOGINCONTEXT,
            USERLOGININFO
        }}>
            {children}
        </Global_context.Provider>
    )
}

export default Global_context_Provider;
export {
    useGlobalContext
}