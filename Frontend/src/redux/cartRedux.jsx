// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find((p) => p._id === action.payload._id);

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }

            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
        },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    },
});

export const { addProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
