import { createContext, useContext, useState } from "react";
import {isMobile} from 'react-device-detect'

const StateContext = createContext({
    user: null,
    token: null,
    isMobile: false,
    setUser: ()=>{},
    setToken:()=>{}
})

export const ContextProvider = ({children})=>{

    const [user, setUser] = useState({ })


    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    //const [token, _setToken] = useState(11)

    const setToken = (token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    return(
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            isMobile
         }}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext)
