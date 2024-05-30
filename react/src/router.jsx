import {Navigate, createBrowserRouter} from "react-router-dom";

import AppLayout from './components/layouts/AppLayout.jsx';
import User from './views/User.jsx';
import NotFound from './views/NotFound.jsx';

import GuestLayout from './components/layouts/GuestLayout.jsx';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';

import DashboardLayout from "./components/layouts/DashboardLayout.jsx";
import Dashboard from './views/admin/Dashboard.jsx';
import AdminUsers from './views/admin/Users.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='user'/>
            },
            {
                path: '/user',
                element: <User/>
            },
        ]
    },
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/users',
                element: <AdminUsers/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },


    {
        path: '*',
        element: <NotFound/>
    }
]);

 export default router
