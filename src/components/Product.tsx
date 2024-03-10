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
import Swal from 'sweetalert2';

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
        showAlert()
    }

    function showAlert() {
        Swal.fire({
            icon: 'success',
            title: 'added to cart',
            text: 'The product has been added to your cart successfully!',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
        })
    }

    function showAddAlert() {
        Swal.fire({
            icon: 'success',
            title: 'add to wishList',
            text: 'The product has been added to wishList successfully!',
            showConfirmButton: false,
            timer: 3000,
            toast: true,
        })
    }
    function showRemoveAlert() {
        Swal.fire({
            icon: 'success',
            title: 'remove from wishList',
            text: 'The product has been removed from wishList successfully!',
            showConfirmButton: false,
            timer: 3000,
            toast: true,
        })
    }

    const renderStars = () => {
        const stars = [];
        const totalStars = 5;
        const fullStars = Math.min(Math.floor(product.rating.rate), totalStars);

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon key={i} style={{ color: '#FFFF33', fontSize: '20px' }} />);
            } else {
                stars.push(<StarBorderIcon key={i} style={{ fontSize: '20px' }} />);
            }
        }
        return stars;
    };

    return (
        <div className='bg-white relative z-10 shadow-md border-t-4 border-black' >

            <div className='cursor-pointer '>
                <WishListToggle product={product} showAddAlert={showAddAlert} showRemoveAlert={showRemoveAlert} />
            </div>

            <div className='p-2 cursor-pointer my-2' onClick={() => navigate(product.id)} >
                <img
                    className='object-contain w-52 h-52 mx-auto '
                    src={product.image}
                    alt='product image'
                />

                <p className='font-semibold text-center line-clamp-1'>{product.title}</p>

                <p className='pt-2'>{product.rating.count} ratings</p>
                <p>{product.rating.rate} {renderStars()}</p>
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