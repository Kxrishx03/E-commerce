import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        registerError: false,
        registerSuccess: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        registerStart: (state) => {
            state.isFetching = true;
            state.registerError = false;
            state.registerSuccess = false;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.registerSuccess = true;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.registerError = true;
        },
        resetRegisterState: (state) => {
            state.registerError = false;
            state.registerSuccess = false;
        },
    },
});

export const { 
    loginStart, loginSuccess, loginFailure, 
    registerStart, registerSuccess, registerFailure, 
    resetRegisterState 
} = userSlice.actions;

export default userSlice.reducer;
