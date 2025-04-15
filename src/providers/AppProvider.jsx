import { HeadProvider } from "react-head";

const AppProvider = ({
    children
}) => {
    return <>
        <HeadProvider>
            {children}
        </HeadProvider>
    </>
}

export default AppProvider;