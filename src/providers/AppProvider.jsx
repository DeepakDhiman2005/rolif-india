import { HeadProvider } from "react-head";
import { Provider } from "react-redux";
import store from "../redux/store";

const AppProvider = ({
    children
}) => {
    return <>
        <Provider store={store}>
            <HeadProvider>
                {children}
            </HeadProvider>
        </Provider>
    </>
}

export default AppProvider;