'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";

const reduxStore = configureStore({
    reducer:{
        cart: cartReducer,
        wishList: wishListReducer
    }
})

export const store = reduxStore;