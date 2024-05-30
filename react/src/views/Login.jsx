import { useRef, useState } from "react";
import LoginCard from "../components/LoginCard.jsx";
import Logo from "../components/Logo.jsx";
import Input from "../components/elements/Input.jsx";
import Button from "../components/elements/button.jsx";
import axiosClient from './axios-client.js';
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const loginRequest = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/signin', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex flex-col justify-between relative">
            <p className="sm:hidden text-gray-500 text-sm mt-2 absolute top-1 left-1/2 transform -translate-x-1/2">English (US)</p>
            <div className="h-4/5 flex flex-col justify-center items-center md:flex-row md:justify-center pt-[7.0rem] md:space-x-2 lg:space-x-32 xl:space-x-42 2xl:space-x-60 md:pt-[4.5rem]">
                <div className="sm:flex flex-col">
                    <Logo className="justify-items-center lg:justify-items-start -ml-4" />
                    <h1 className="hidden sm:block text-4xl text-gray-800 mt-1">Recent Logins</h1>
                    <p className="hidden sm:block text-sm text-gray-500 mt-2">Click your picture or add an account.</p>
                    <div className="hidden md:flex mt-4">
                        <LoginCard name="Johnson" src="/img/johnson.jpg" />
                        <LoginCard name="Add Account" className="text-primary " />
                    </div>
                </div>
                <div>
                    <div className="w-screen sm:w-[25rem] px-4 pt-[8.2rem] sm:flex-col sm:bg-white sm:p-4 sm:mt-[3.0rem] sm:justify-center sm:shadow-xl rounded-lg">
                        <form onSubmit={loginRequest} className="space-y-3">
                        {errors && (
                                <div>
                                    {Object.keys(errors).map((key) => (
                                        <p key={key} className="text-red-500">{errors[key][0]}
                                        {console.log(errors[key][0])}
                                        </p>
                                    ))}
                                </div>
                            )}
                            <Input ref={emailRef} type="email" className="bg-white h-[3.8rem] w-full shadow-sm" autoComplete="email" placeholder="Mobile number or email" />
                            <Input ref={passwordRef} type="password" className="bg-white h-[3.8rem] w-full shadow-sm" autoComplete="current-password" placeholder="Password" />
                            <Button type="submit" className="bg-primary w-full h-[2.7rem] text-white mt-8 sm:rounded-lg">Log in</Button>
                            <a href="" className="text-gray-600 flex justify-center pt-2 text-sm sm:text-primary">Forgot Password?</a>
                            <hr className="hidden sm:block"></hr>
                            <div className="hidden sm:flex sm:justify-center sm:items-center">
                                <Button className="bg-[#42B72A] w-1/2 h-[2.9rem] text-white my-3 sm:rounded-lg py-3">Create new account</Button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm text-center hidden sm:block"><span className=" font-semibold text-gray-800 inline-flex">Create a Page </span> for a celebrity, brand or business.</p>
                </div>

            </div>
            <div className="w-full h-32 sm:h-36 sm:bg-white px-4 pt-1">
                <Button className="sm:hidden bg-transparent text-ns text-gray-600 w-full h-[2.3rem] border border-gray-300">Create new account</Button>
                <div className="sm:hidden mt-3 text-gray-600 text-xs">
                    <div className="flex items-center justify-center w-full h-full">
                        <img className="w-14 pt-2" src="/img/meta.png" alt="Logo" />
                    </div>
                    <ul className="flex justify-center space-x-2 mt-6">
                        <li className="hover:underline">About</li>
                        <li className="hover:underline">Help</li>
                        <li className="hover:underline">More</li>
                    </ul>
                </div>
                <div className="hidden sm:block mt-6 pb-4 sm:pl-[] md:pl-[15%] lg:pl-[23%] w-[77%]">
                    <div className="flex space-x-2 items-center">
                        <ul className=" flex space-x-3 flex-wrap text-xs text-gray-500">
                            <li className="hover:underline">English (US)</li>
                            <li className="hover:underline">العربية</li>
                            <li className="hover:underline">Français (France)</li>
                            <li className="hover:underline">Bahasa Indonesia</li>
                            <li className="hover:underline">Русский</li>
                            <li className="hover:underline">Español</li>
                            <li className="hover:underline">Português (Brasil)</li>
                            <li className="hover:underline">বাংলা</li>
                            <li className="hover:underline">中文(简体)</li>
                            <li className="hover:underline">Deutsch</li>
                            <li className="hover:underline">Italiano</li>
                        </ul>
                        <a className="px-3 bg-gray-100 border border-gray-300 hover:cursor-pointer">+</a>
                    </div>
                    <hr className="mt-2"></hr>
                    <ul className=" flex space-x-6 flex-wrap text-xs text-gray-500 mt-2">
                        <li className="hover:underline">Sign Up</li>
                        <li className="hover:underline">Log In</li>
                        <li className="hover:underline">Messenger</li>
                        <li className="hover:underline">Facebook Lite</li>
                        <li className="hover:underline">Video</li>
                        <li className="hover:underline">Places</li>
                        <li className="hover:underline">Games</li>
                        <li className="hover:underline">Marketplace</li>
                        <li className="hover:underline">Meta Pay</li>
                        <li className="hover:underline">Meta Store</li>
                        <li className="hover:underline">Meta Quest</li>
                        <li className="hover:underline">Meta AI</li>
                        <li className="hover:underline">Instagram</li>
                        <li className="hover:underline">Threads</li>
                    </ul>
                    <ul className=" flex space-x-6 flex-wrap text-xs text-gray-500 mt-2">
                        <li className="hover:underline">Fundraisers</li>
                        <li className="hover:underline">Services</li>
                        <li className="hover:underline">Voting Information Center</li>
                        <li className="hover:underline">Privacy Policy</li>
                        <li className="hover:underline">Privacy Center</li>
                        <li className="hover:underline">Groups</li>
                        <li className="hover:underline">About</li>
                        <li className="hover:underline">Create ad</li>
                        <li className="hover:underline">Create Page</li>
                        <li className="hover:underline">Developers</li>
                        <li className="hover:underline">Careers</li>
                        <li className="hover:underline">Cookies</li>
                    </ul>
                    <ul className=" flex space-x-6 text-xs text-gray-500 mt-2">
                        <li className="hover:underline">Ad choices</li>
                        <li className="hover:underline">Terms</li>
                        <li className="hover:underline">Help</li>
                        <li className="hover:underline">Contact Uploading & Non-Users</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-3">Meta © 2024</p>
                </div>
            </div>
        </div>
    );
}
