import { removeFromCart } from '@/redux/slices/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function CartProduct({ CProduct }) {
    
    const dispatch = useDispatch()

    function removeProduct(){
        dispatch(removeFromCart(CProduct))
    }

    return (
        <>
            <div className='py-4'>

                <div className='border-b-2 flex justify-between py-4 '>

                    <div className='flex  gap-4'>

                        <img
                            src={CProduct.image}
                            className='object-contain w-44  h-44'
                        />

                        <div>

                            <p className='font-semibold '>{CProduct.title}</p>

                            <div className='flex gap-4 pt-2'>
                                {/* <p><FormatListNumberedIcon/>quantity</p> */}
                                <button className='hover:text-red-500' onClick={()=> removeProduct(CProduct.id)}><DeleteForeverOutlinedIcon/>remove</button>
                                {/* <p><LoyaltyOutlinedIcon/>add to wishlist</p> */}
                            </div>

                        </div>

                    </div>

                    <p className='font-semibold'>{CProduct.price}$</p>

                </div>

            </div>

        </>
    )
}

export default CartProduct