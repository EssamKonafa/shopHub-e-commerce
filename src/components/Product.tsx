import { addToCart } from '@/redux/slices/cartSlice';
import { addToWish } from '@/redux/slices/wishListSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WishListToggle from './wishListToggle';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(product.rating.rate);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={i} style={{ color: '#FFFF66',fontSize:'20px'}} />);
        }

        if (product.rating.rate - fullStars >= 0.5) {
            stars.push(<StarBorderIcon key={fullStars} style={{fontSize:'20px'}} />);
        }

        return stars;
    };

    return (
        <div className='bg-white relative z-10 shadow-md' >

            <div className='cursor-pointer border-2 border-black border-rounded-full'>
                <WishListToggle product={product} />
            </div>

            <div className='p-4  cursor-pointer my-2' onClick={() => navigate(product.id)} >
                <img
                    className='object-contain w-52 h-52 mx-auto '
                    src={product.image}
                    alt='product image'
                />

                <p className='font-semibold text-center line-clamp-1'>{product.title}</p>

                <p className='pt-2'>voters:{product.rating.count}</p>
                <p>rate:{renderStars()}</p>
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