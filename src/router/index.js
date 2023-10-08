import { HomePage, AboutPage, ProductPage, Admin, Login, Register, ContactPage } from "@/pages/client";

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
        path: "/contact",
        element: ContactPage,
        layout: ''
    },
    {
        path: "/login",
        element: Login,
        layout: 'auth'
    },
    {
        path: "/register",
        element: Register,
        layout: 'auth'
    },

]
export { routersClient };