import { HeadProvider } from "react-head";
import { Provider } from "react-redux";
import store from "../redux/store";
import CollapseProvider from "./CollapseProvider";
import { ThemeProvider } from "@material-tailwind/react";
import customTheme from "../theme/customTheme";

const AppProvider = ({
    children
}) => {
    return <>
        <Provider store={store}>
            <CollapseProvider>
                <HeadProvider>
                    <ThemeProvider value={customTheme}>
                        {children}
                    </ThemeProvider>
                </HeadProvider>
            </CollapseProvider>
        </Provider>
    </>
}

export default AppProvider;