'use client'
import { IS_LOGIN } from "@/reduce/constante";
import { LoginReduce, initialState } from "@/reduce/globalReduce";
import { createContext, useContext, useReducer, useState } from "react";

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

    const handleReduceLogIn = (data) => {
        const user =  {
          login : true,
          name : data.name,
          subname : data.subname,
          uid : data.uid,
          id : data.id
        }
        dispatch({type : IS_LOGIN, payload : user})
      }

    return(
        <Global_context.Provider value={{
            handleReduceLogIn,
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