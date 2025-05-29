import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/mainLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Services from "./pages/Services";


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
                path: "/services",
                element: <Services/>
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