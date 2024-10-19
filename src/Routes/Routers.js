import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import App from "../App";
import Signup from "../component/signup/Signup";
import Login from "../component/login/login";
import Home from "../component/home/Home";
import ForgotPassword from "../component/forget-password/ForgetPassword";
import { useSelector } from "react-redux";
import Payment from "../component/payment-page/Payment";
import LandingPage from "../component/landing-page/LandingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                index: true,
                path: '/login',
                element: <Login />
            },
            {
                index: true,
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/home',
                element: (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                )
            }
            
        ]
    },
    {
        path: "/profile",
        element: <App />,
        children : [
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        
                    </PrivateRoute>
                )
            }
        ]
    },
]);

function PrivateRoute({children}) {
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    return isUserLoggedIn ? children : <Navigate to="/login"  />;
}