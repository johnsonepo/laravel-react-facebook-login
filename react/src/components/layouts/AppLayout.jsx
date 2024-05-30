import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider.jsx";
import '../../../public/style.css'
import { useEffect } from "react";
import axiosClient from "../../views/axios-client.js";

export default function AppLayout() {
    const {user, token, setUser} = useStateContext()
    if(!token){
        return <Navigate to='/login'/>
    }
    useEffect(()=>{
        axiosClient.get('/user')
            .then(({data})=>{
                setUser(data)
        })
    },[])

    return (
          <div className="max-h-full overflow-hidden">
                {user.name}
                <main>
                    <Outlet/>
                </main>
          </div>
    )
}

