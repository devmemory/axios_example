import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./slices/toastSlice";

export default configureStore({
    reducer: {
        toastSlice,
    },
});
