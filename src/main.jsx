import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/LogIn",
        element: <LogIn />,
    },
    {
        path: "/SignUp",
        element: <SignUp />,
    },
]);

document.body.style.zoom = 0.7;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
