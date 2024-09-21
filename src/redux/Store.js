import {configureStore } from "@reduxjs/toolkit"
import CartSlice from "./Slices/CartSlice";


export const Store = configureStore({
    reducer:{
        Cart : CartSlice
    }
})