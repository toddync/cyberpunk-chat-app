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

document.body.style.zoom = 0.7; //parseFloat(localStorage.getItem("zoom")) || 1;

// await unregisterAll();
// registerAll(["Ctrl+Shift+C", "Ctrl+Shift+L"], (s) => {
//     console.log(s);
//     console.log(document.body.style.zoom);
//     if (s == "CommandOrControl+Shift+L") {
//         if (document.body.style.zoom == 0.1) return;
//         document.body.style.zoom -= 0.1;
//         localStorage.setItem("zoom", document.body.style.zoom);
//     }

//     if (s == "CommandOrControl+Shift+C") {
//         if (document.body.style.zoom == 2) return;
//         document.body.style.zoom += 0.1;
//         console.log(1);
//         localStorage.setItem("zoom", document.body.style.zoom);
//     }
// });

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
