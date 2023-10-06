import { HomePage, AboutPage, ProductPage, Admin, LogIn, Register } from "@/pages/client";

const routersClient = [
    {
        path: "/",
        element: HomePage,
        layout: ''
    },
    {
        path: "/about",
        element: AboutPage,
        layout: ''
    },
    {
        path: "/product",
        element: ProductPage,
        layout: ''
    },
    {
        path: "/logIn",
        element: LogIn,
        layout: 'auth'
    },
    {
        path: "/register",
        element: Register,
        layout: 'auth'
    },
    
]
export {routersClient};