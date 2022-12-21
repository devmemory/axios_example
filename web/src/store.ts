import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./slices/toast_slice";

export default configureStore({
    reducer: {
        toastSlice,
    },
});
