'use client'
import { addToWish, removeFromWish } from '@/redux/slices/wishListSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function WishListToggle({ product }) {
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishList.wishList);

    const isWished = wishList.some((item) => item.id === product.id);
    
    const toggleWishlist = () => {
        if (isWished) {
            dispatch(removeFromWish(product));
        } else {
            dispatch(addToWish(product));
        }
    };

    return (
        <div className='p-4' onClick={toggleWishlist}>
            {isWished ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </div>
    );
}

export default WishListToggle;