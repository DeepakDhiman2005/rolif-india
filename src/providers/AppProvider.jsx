import { HeadProvider } from "react-head";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({
    children
}) => {
    return <>
        <BrowserRouter>
            <HeadProvider>
                {children}
            </HeadProvider>
        </BrowserRouter>
    </>
}

export default AppProvider;