'use client'
import CartProduct from '@/components/CartProduct';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function page() {

  const selectedProduct = useSelector((state) => state.cart.products)

  const [cartProduct, setCartProducts] = useState([])

  function theProducts() {
    setCartProducts(selectedProduct)
  }

  useEffect(() => {
    theProducts()
  }, [cartProduct, selectedProduct])

  return (
    <>

      <div className='m-6 p-6 bg-white'>

        <div className='flex border-b-2 border-gray-300 justify-between pb-2'>
          <h1 className='text-2xl font-semibold'>Shopping Cart < ShoppingCartOutlinedIcon/></h1>
          <h1 className='self-end'>Price</h1>
        </div>
        {cartProduct.map((CProduct) => (
          <div key={CProduct.id}>
            <CartProduct CProduct={CProduct} />
          </div>
        ))}

        <div className='flex flex-row-reverse  border-t-2  pt-1'>
          <p className='  '> subtotal: sub price</p>
        </div>

      </div>

    </>
  )
}

export default page