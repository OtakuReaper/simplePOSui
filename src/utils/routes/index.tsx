import {createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import UnauthenticatedWrapper from "../../layout/unauthenticatedwrapper";

export const router = createBrowserRouter ([
    {
        path: "/login",
        element: <Login />,
        loader: () => "loading..."
    },

    //Universal Redirect
    {
        path: "*",
        element: <UnauthenticatedWrapper><Login /></UnauthenticatedWrapper>,
        loader: () => "loading..."
    },
]);