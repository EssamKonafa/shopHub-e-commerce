'use client'
import Loader from '@/components/Loader'
import WishListToggle from '@/components/wishListToggle'
import { addToCart } from '@/redux/slices/cartSlice'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

interface ProductInfo {
    product: {
        id: number,
        title: string,
        image: string
        category: string,
        description: string,
        price: number,
        rating: { rate: number; count: number },
    }
}

function page() {

    const params = useParams()
    const id = params.id

    const [Product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    const getProductInfo = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false)
        }
    }

    const dispatch = useDispatch()
    function addProductCart(product) {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        getProductInfo()
    }, [])

    if (loader) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Loader />
            </div>
        );
    }

    return (
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-5 bg-white m-5 shadow-md'>

            <div>
                <div className='pb-10'>
                    <WishListToggle product={Product} />
                </div>
                <img
                    src={Product.image}
                    className=' w-auto h-auto'
                    alt='product image'
                />
            </div>

            <div className='flex p-5 gap-8 '>
                <div>
                    <span className='flex gap-5 pt-10'>
                        <h1 className='text-2xl font-semibold border-b-2'>{Product.title}</h1>
                    </span>

                    <h5 className='font-normal py-10 text-2xl'>price: {Product.price}$</h5>

                    <p className='pt-5'>{Product.description}</p>

                    <button className='bg-gray-200 rounded-md p-2 mt-2 hover:bg-black hover:text-white transition duration-300 ' onClick={() => addProductCart(Product)}>
                        add to cart
                    </button>

                </div>

            </div>
        </div>
    )
}

export default page