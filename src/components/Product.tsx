import { addToCart } from '@/redux/slices/cartSlice';
import { addToWish } from '@/redux/slices/wishListSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WishListToggle from './wishListToggle';

//عايز اقلل الكود ابقي شوف ازاي نعملها علي دي
interface ProductProps {
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


function Product({ product }: ProductProps) {

    const router = useRouter()

    function navigate() {
        router.push(`productinfo/${product.id}`)
    }

    const dispatch = useDispatch()
    function addProductCart() {
        dispatch(addToCart(product))
    }

    const wishList = useSelector((state) => state.wishList.wishList)
    function addWish() {
        dispatch(addToWish(product))
    }

    return (
        <div className='bg-white' >


            <WishListToggle product={product}/>

            <div className='p-4  cursor-pointer ' onClick={() => navigate(product.id)} >
                <img
                    className='object-contain w-52 h-52 mx-auto '
                    src={product.image}
                    alt='product image'
                />

                <p className='font-semibold text-center line-clamp-1'>{product.title}</p>

                <p className='pt-2'>voters:{product.rating.count}</p>
                <p>rate:{product.rating.rate}</p>
                <p className='font-bold'>price: {product.price} $</p>

            </div>

            <p className='text-center px-3 pb-5'>
                <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 w-full ' onClick={addProductCart}>
                    <ShoppingCartOutlinedIcon /> add to cart
                </button>

            </p>

        </div>
    )
}

export default Product