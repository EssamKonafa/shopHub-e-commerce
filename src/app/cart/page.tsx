import React from 'react'

function page() {
  return (
    <div className='p-4'>

      <div className='p-4 bg-white '>

        <div className='flex border-b-2 border-gray-300 justify-between pb-2'>
          <h1 className='text-xl'>Shopping Cart</h1>
          <h1 className='self-end'>Price</h1>
        </div>

        <div className='products p-4'>

          <div className='border flex justify-between p-4'>

            <div className='flex  gap-4'>

              <p>product image</p>

              <div>

                <p>product title</p>

                <div className='flex gap-4'>
                  <p>quantity</p>
                  <p>delete</p>
                  <p>add to wish list</p>
                </div>

              </div>

            </div>

            <span>product price</span>
          </div>

        </div>

        <div className='flex flex-row-reverse  border-t-2  pt-1'>
          <p className='  '> subtotal: sub price</p>
        </div>

      </div>

    </div>
  )
}

export default page