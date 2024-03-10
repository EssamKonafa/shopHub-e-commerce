'use client'
import { removeFromWish } from '@/redux/slices/wishListSlice'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

function Wish({ wishes }) {

  const dispatch = useDispatch()
  function removeWish() {
    dispatch(removeFromWish(wishes))
  }

  const router = useRouter()

  function handleNavigate(id) {
    router.push(`/productinfo/${id}`)
  }

  return (
    <div className='border-2 p-4 '>

      <div className='cursor-pointer' onClick={() => handleNavigate(wishes.id)}>

        <img
          src={wishes.image}
          className='object-contain w-52 h-52 mx-auto '
        />

        <div className='font-semibold text-center py-1 line-clamp-1'>
          {wishes.title}
        </div>

      </div>

      <div>
        <button className='bg-gray-200 rounded-md p-2 hover:bg-red-600 hover:text-white transition duration-300 w-full' onClick={removeWish}>remove wish</button>
      </div>

    </div>
  )
}

export default Wish