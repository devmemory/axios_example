import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name: "toast",
    initialState: {
        duration: 1500,
        show: false,
        title: undefined,
        msg: undefined,
        isLoading: false,
    },
    reducers: {
        showToast: (state, action) => {
            state.title = action.payload.title;
            state.msg = action.payload.msg;
            state.show = true;

            if (action.payload.duration !== undefined) {
                state.duration = action.payload.duration;
            }
        },
        hide: (state) => {
            state.show = false;
        },
        showLoading: (state, action) => {
            state.isLoading = true;

            state.show = action.payload.show;
        },
    },
});

export const { showToast, showLoading, hide } = toastSlice.actions;

export default toastSlice.reducer;
