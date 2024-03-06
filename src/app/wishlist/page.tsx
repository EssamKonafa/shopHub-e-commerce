'use client'
import Wish from '@/components/Wish'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function page() {

    const wishList = useSelector((state) => state.wishList.wishList)
    const [wish, setWish] = useState([])
    console.log(wish);
    
    function getWishList() {
        setWish(wishList)
    }
    useEffect(() => {
        getWishList()
    }, [wish,wishList, ])

    return (
        <div className='grid grid-cols-4 gap-12 p-12 '>
            {wish.map((wishes) => (
                <div key={wishes.id}>
                    <Wish wishes={wishes} />
                </div>
            ))}
        </div>
    )
}

export default page