'use client'
import CartProduct from '@/components/CartProduct';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from '@/context/authContext';

function Page() {
  const { currentUser } = useAuth();
  const selectedProduct = useSelector((state) => state.cart.products);
  const [cartProduct, setCartProducts] = useState([]);
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);
  const [showSignInMessage, setShowSignInMessage] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = () => {
    const total = cartProduct.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setSubtotal(total);
  };

  function theProducts() {
    setCartProducts(selectedProduct);
    calculateSubtotal();
  }

  const handleCheckout = () => {
    if (currentUser) {
      setShowCheckoutMessage(true);
    } else {
      setShowSignInMessage(true);
    }
  };

  useEffect(() => {
    theProducts();
  }, [cartProduct, selectedProduct]);

  return (
    <>
      <div className='m-6 p-6 bg-white'>
        <div className='flex border-b-2 border-gray-300 justify-between pb-2'>
          <h1 className='text-2xl font-semibold'>
            {cartProduct.length > 0 ? (
              <>Shopping Cart <ShoppingCartOutlinedIcon /></>
            ) : (
              <>Your Cart is Empty</>
            )}
          </h1>
          <h1 className='self-end'>Price</h1>
        </div>

        {cartProduct.length > 0 ? (
          cartProduct.map((CProduct) => (
            <div key={CProduct.id}>
              <CartProduct CProduct={CProduct} />
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center border-t-2 pt-4'>
            <p>add some products you want to buy.</p>
          </div>
        )}

        {cartProduct.length > 0 && (
          <>
            <div className='flex flex-row-reverse border-t-2 pt-1'>
              <p className=' font-bold '>subtotal: ${subtotal.toFixed(2)}</p>
            </div>

            <div className='flex flex-row-reverse p-2'>
              <button
                role='link'
                className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 '
                onClick={handleCheckout}
              >
                proceed to checkout
              </button>
            </div>
          </>
        )}

        {showSignInMessage && (
          <div className='flex justify-center items-center border-t-2 pt-4 font-bold'>
            <p>Please sign in to proceed to checkout.</p>
          </div>
        )}

        {showCheckoutMessage && (
          <div className='flex justify-center items-center border-t-2 pt-4 font-bold'>
            <p>
              Thank you for your purchase! Your order has been processed.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;