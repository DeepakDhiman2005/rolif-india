import { configureStore } from "@reduxjs/toolkit";

// features
import auth from './features/auth';

const store = configureStore({
    reducer: {
        auth,
    }
});

export default store;