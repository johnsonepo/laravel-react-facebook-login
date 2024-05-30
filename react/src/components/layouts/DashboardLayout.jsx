import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider.jsx";

export default function DashboardLayout() {
    const {user, token} = useStateContext()
    if(!token){
        return <Navigate to='/login'/>
    }
    return (
          <div className="">
            <div>
                <div>
                    Header
                </div>
                <aside>
                    sidebar
                </aside>
                <main>
                    <Outlet/>
                </main>
            </div>
          </div>
    )
}

