import Link from 'next/link'
import React from 'react'

function Product() {
    return (
        <Link href='/productinfo' className='border-2 p-5 mx-auto '>

            <p>love</p>

            <div className='text-center'>
                <p>product image</p>
                <p>product title</p>
            </div>

            <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 '>
                    add to cart
            </button>

        </Link>
    )
}

export default Product