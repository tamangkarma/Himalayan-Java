import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/mainLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/franchise",
                element: <Franchise/>
            }
        ]
    }
])