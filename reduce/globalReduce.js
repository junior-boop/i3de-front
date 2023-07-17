import { IS_EMPTY, IS_LOGOUT, IS_LOGIN } from "./constante"

export const initialState = {
    login : false,
    name : '',
    subname : '',
    uid : '',
    id : ''
}



export function LoginReduce(state, action){
    const ls = localStorage || window.localStorage 
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
                login : action.payload.login,
                name : action.payload.name,
                subname : action.payload.surname,
                uid : action.payload.uid,
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