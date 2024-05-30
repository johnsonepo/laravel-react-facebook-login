import { HiOutlineSearch } from "react-icons/hi";
import { HiHome } from "react-icons/hi";

import { useStateContext } from "../../context/ContextProvider.jsx";
import Logo from '../Logo.jsx';

export default function Header() {
    const {user} = useStateContext()
    return (
        <div className="flex fixed h-14 bg-white w-screen shadow-sm z-10 justify-between items-center px-4">
            <div className="w-1/3 flex text-gray-600 space-x-3">
                <Logo/>
                <div className="rounded-full bg-gray-200 h-10 items-center inline-flex" >
                    <HiOutlineSearch className="ml-4 space-y-2" size="1.25rem" />
                    <input className="text-sm flex-inline ml-2 w-full h-full bg-transparent pl-2 focus:outline-none focus:border-transparent" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="w-1/3">
                <ul className="flex text-gray-600 justify-between items-center">
                    <li className="text-blue-600 border-b-2 border-blue-600">
                        <div className="mx-12 my-4">
                            <a href="">
                                <HiHome size="2rem"/>
                            </a>
                        </div>
                    </li>
                    <li className="border-b-2 border-white-600">
                        <div className="mx-12 my-4">
                            <a href="">
                                <HiHome />
                            </a>
                        </div>
                    </li>
                    <li className="border-b-2 border-white-600">
                        <div className="mx-12 my-4">
                            <a href="">
                                <HiHome />
                            </a>
                        </div>
                    </li>
                    <li className="border-b-3 border-white-600">
                        <div className="mx-12 my-4">
                            <a href="">
                                <HiHome />
                            </a>
                        </div>
                    </li>
                    <li className="border-b-2 border-white-600">
                        <div className="mx-12 my-4">
                            <a href="">
                                <HiHome />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-end items-center space-x-2">
                <div className="w-11 h-11 rounded-full bg-gray-300 place-content-center p-3">
                    <HiHome />
                </div>
                <div className="w-11 h-11 rounded-full bg-gray-300 place-content-center p-3">
                    <HiHome />
                </div>
                <div className="w-11 h-11 rounded-full bg-gray-300 place-content-center p-3 relative">
                    <HiHome />
                    <span className="bg-red-600 text-white p-1 text-xs rounded-full absolute right-0 top-0">18</span>
                </div>
                <div className="w-11 h-11 rounded-full bg-gray-300 place-content-center">
                    <img className="rounded-full" src="./img/johnson.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

