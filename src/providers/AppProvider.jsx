import { HeadProvider } from "react-head";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import { ThemeProvider } from "@material-tailwind/react";

const AppProvider = ({
    children
}) => {
    return <>
        <BrowserRouter>
            <HeadProvider>
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </HeadProvider>
        </BrowserRouter>
    </>
}

export default AppProvider;