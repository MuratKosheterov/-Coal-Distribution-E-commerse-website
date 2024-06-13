import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import navbarSlice from "./slices/navbarSlice";

export const store = configureStore({
    reducer: {
        productReducer: productSlice,
        navbarReducer: navbarSlice
    },
})

