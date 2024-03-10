'use client'
import { addToWish, removeFromWish } from '@/redux/slices/wishListSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from 'sweetalert2';

function WishListToggle({ product,showAddAlert,showRemoveAlert }) {
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishList.wishList);

    const isWished = wishList.some((item) => item.id === product.id);
    
    const toggleWishlist = () => {
        if (isWished) {
            dispatch(removeFromWish(product));
            showRemoveAlert();
        } else {
            dispatch(addToWish(product));
            showAddAlert();
        }
    };

    return (
        <div className='p-1 absolute border border-black rounded-full cursor-pointer m-2 hover:bg-gray-300' onClick={toggleWishlist}>
            {isWished ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </div>
    );
}

export default WishListToggle;