'use client'
import Wish from '@/components/Wish'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Page() {

    const wishList = useSelector((state) => state.wishList.wishList)
    const [wish, setWish] = useState([])

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

                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4'>
                    {wish.length > 0 ? (
                        wish.map((wishes) => (
                            <div key={wishes.id}>
                                <Wish wishes={wishes} />
                            </div>
                        ))
                    ) : (
                        <div className="w-full mx-full text-center font-bold">
                            <p >There are no wish products yet.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page;