import Button from "../components/elements/button.jsx";
import axiosClient from './axios-client.js';
import { useStateContext } from "../context/ContextProvider.jsx";

export default function User() {
    const { setUser, setToken } = useStateContext();

    const logoutRequest = (e) => {
        e.preventDefault();
        axiosClient.post('/signout')
            .then(() => {
                setUser({})
                setToken(null)
            })
            .catch((err) => {
                // Handle errors here
                console.error("Logout failed:", err);
            });
    };

    return (
          <div className="">
             <div className="m-4">
                <form onSubmit={logoutRequest} className="space-y-3">
                    <Button type="submit" className="bg-primary w-1/2 h-[2.7rem] text-white mt-8 sm:rounded-lg">Log out</Button>
                </form>
             </div>
          </div>
    )
}

