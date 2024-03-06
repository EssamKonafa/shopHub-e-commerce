'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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

    const [product, setProduct] = useState({})
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

    useEffect(() => {
        getProductInfo()
    }, [])

    return (
        <div className='p-5'>
            <div className='flex border p-5 gap-8 '>

                <div>
                    <img
                    src={product.image}
                    className=' w-auto h-auto'
                    alt='product image'
                    />
                </div>

                <div>
                    <span className='flex gap-5'>
                        <h1 className='text-2xl font-semibold border-b-2'>{product.title}</h1>
                        <p>love</p>
                    </span>
                    <h5 className='font-semibold'>{product.price}</h5>
                    <p>{product.description}</p>

                    <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 '>
                        add to cart
                    </button>

                </div>


            </div>
        </div>
    )
}

export default page