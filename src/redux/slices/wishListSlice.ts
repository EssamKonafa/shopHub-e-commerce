import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState: {
        wishList: []
    },
    reducers: {
        addToWish: (state, action) => {
            state.wishList = [...state.wishList, action.payload]
        },
        removeFromWish: (state, action) => {
            const wishProduct = state.wishList.findIndex((product)=>product.id===action.payload.id)
            let newWish = [...state.wishList]
            if(wishProduct>=0){
                newWish.splice(wishProduct,1)
            }
            state.wishList=newWish
        }
    }
})

export const {addToWish,removeFromWish} = wishListSlice.actions
export default wishListSlice.reducer