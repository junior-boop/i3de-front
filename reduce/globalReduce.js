import { IS_EMPTY, IS_LOGOUT, IS_LOGIN } from "./constante"

export const initialState = {
    login : false,
    name : '',
    subname : '',
    uid : '',
    id : ''
}



export function LoginReduce(state, action){
    if(typeof window !== 'undefined'){
        const ls = localStorage || localStorage 
        const key = 'i3de_login'

        if(ls.getItem(key) === null){
            ls.setItem(key, '')
        }

        switch (action.type) {
            case IS_EMPTY :
                state = initialState
                return state
            case IS_LOGIN:
                state = {
                    mail : action.payload.mail,
                    name : action.payload.name,
                    surname : action.payload.surname,
                    id : action.payload.id
                }

                ls.setItem(key, JSON.stringify(state))
                return state
            case IS_LOGOUT:
                state = initialState
                ls.removeItem(key)
                return state
        }
    }
}