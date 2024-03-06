'use client'
import { removeFromWish } from '@/redux/slices/wishListSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function Wish({wishes}) {
    
    const dispatch= useDispatch()
    function removeWish(){
        dispatch(removeFromWish(wishes))
    }
  return (
    <div>
        {wishes.title}
        <button className='bg-gray-400' onClick={removeWish}>remove wish</button>
    </div>
  )
}

export default Wish