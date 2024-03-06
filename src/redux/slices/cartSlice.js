import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {

        addToCart: (state, action) => {
            state.products = [...state.products, action.payload]
        },

        removeFromCart: (state, action) => {
            const cartProduct = state.products.findIndex((cartProduct) => cartProduct.id === action.payload.id)

            let newCart = [...state.products]

            if (cartProduct >= 0) {
                newCart.splice(cartProduct, 1)
            }

            state.products = newCart
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer