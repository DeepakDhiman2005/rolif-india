import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// lazy
const Home = lazy(() => import("../pages/home/Home"));
const AboutUs = lazy(() => import("../pages/about/AboutUs"));

const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/about-us" element={<AboutUs />} />

            {/* 404 page */}
            <Route path="*" element={<h2>404 page!</h2>} />
        </Routes>
    </>
}

export default Routing;