import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";


export default configureStore({
    reducer:{
        cart: cartRedux
    }
})