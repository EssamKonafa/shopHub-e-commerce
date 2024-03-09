'use client'
import Wish from '@/components/Wish'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Page() {

    const wishList = useSelector((state) => state.wishList.wishList)
    const [wish, setWish] = useState([])
    console.log(wish);

    function getWishList() {
        setWish(wishList)
    }
    useEffect(() => {
        getWishList()
    }, [wish, wishList,])

    return (
        <div className='bg-white p-5 m-5 '>

            <div className=' text-center w-full'>
                <h1 className='text-3xl font-semibold my-2'>WishList</h1>

                <div className='grid grid-cols-6 gap-4'>
                    {wish.length > 0 ? (
                        wish.map((wishes) => (
                            <div key={wishes.id}>
                                <Wish wishes={wishes} />
                            </div>
                        ))
                    ) : (
                        <div className=" absolute text-center right-96 m-60 font-bold">
                            <p>There are no wish products yet.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page;