'use client'
import Loader from '@/components/Loader'
import WishListToggle from '@/components/wishListToggle'
import { addToCart } from '@/redux/slices/cartSlice'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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

interface ProductInfoProps {
    product: ProductInfo
}

function page() {

    const params = useParams()
    const id = params.id

    const [product, setProduct] = useState<ProductInfo | {}>({})
    const [loader, setLoader] = useState<boolean>(true)

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

    const dispatch = useDispatch()
    function addProductCart(product: ProductInfo) {
        dispatch(addToCart(product))
        showAlert()
    }
    function showAlert() {
        Swal.fire({
            icon: 'success',
            title: 'added to cart',
            text: 'The product has been added to your cart successfully!'
        })
    }

    const showStars = () => {
        const stars = [];
        const totalStars = 5;
        const fullStars = Math.min(Math.floor(product.rating?.rate || 0), totalStars);

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon key={i} style={{ color: '#FFFF33', fontSize: '20px' }} />);
            } else {
                stars.push(<StarBorderIcon key={i} style={{ fontSize: '20px' }} />);
            }
        }
        return stars;
    };

    useEffect(() => {
        getProductInfo()
    }, [])

    if (loader) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Loader />
            </div>
        );
    }

    return (
        <>

            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-5 bg-white m-5 shadow-md mb-20'>

                <div className='mx-auto'>
                    <div className='pb-10'>
                        <WishListToggle product={product} />
                    </div>
                    <img
                        src={product.image}
                        className=' w-96 h-96 object-contain '
                        alt='product image'
                    />
                </div>

                <div className='flex p-5 gap-8 '>
                    <div>
                        <div className=' gap-5 pt-10 pb-2 border-gray-400 items-center '>
                            <h1 className='text-2xl'>{product.title}</h1>
                            <div className='pt-2'>
                                <p>{product.rating.count} ratings</p>
                                <p>{product.rating.rate} {showStars()}</p>
                            </div>
                        </div>

                        <h5 className='font-normal py-5 text-2xl'>price: {product.price}$</h5>


                        <p className='pt-5'>{product.description}</p>

                        <button className='bg-gray-200 rounded-md p-2 mt-2 hover:bg-black hover:text-white transition duration-300 ' onClick={() => addProductCart(product)}>
                            add to cart
                        </button>

                    </div>

                </div>
            </div>

        </>

    )
}

export default page