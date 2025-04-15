// src/router.js
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

// lazy-loaded components
const Home = lazy(() => import("../pages/home/Home"));
const AboutUs = lazy(() => import("../pages/about/AboutUs"));
const Products = lazy(() => import("../pages/products/Products"));
const Login = lazy(() => import("../pages/validations/Login"));

// blogs
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const BlogPost = lazy(() => import("../pages/blogs/BlogPost"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // includes <ScrollRestoration /> if needed
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            // products start
            {
                path: "furniture/*",
                element: <Products />,
            },
            {
                path: "tiles-and-sanitary-ware/*",
                element: <Products />,
            },
            {
                path: "electrics/*",
                element: <Products />,
            },
            {
                path: "services/*",
                element: <Products />,
            },
            // products end
            {
                path: 'blogs',
                element: <Blogs />,
            },
            {
                path: '/blogpost/*',
                element: <BlogPost />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <h2>404 page!</h2>,
    },
]);

const Routing = () => {
    return <>
        <RouterProvider router={router} />
    </>
}

export default Routing;
