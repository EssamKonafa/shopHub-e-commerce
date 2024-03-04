import React from 'react'

function page() {

    return (
        <div className='p-5'>
            <div className='flex border p-5 gap-8 '>

                <div>
                    <p>product image</p>
                </div>

                <div>
                    <span className='flex gap-5'>
                        <h1 className='text-2xl font-semibold border-b-2'>product title</h1>
                        <p>love</p>
                    </span>
                    <h5 className='font-semibold'>price</h5>
                    <p>product info</p>

                    <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 '>
                        add to cart
                    </button>

                </div>


            </div>
        </div>
    )
}

export default page