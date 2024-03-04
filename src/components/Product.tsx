import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

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

    function navigate (){
        router.push(`productinfo/${product.id}`)
    }

    return (
        <div className='border cursor-pointer' onClick={()=> navigate(product.id)}>


                <p>love</p>

                <div className='text-center'>
                    <img
                        src={product.image}
                    />

                    <p>{product.title}</p>

                    <p>voters:{product.rating.count}</p>
                    <p>rate:{product.rating.rate}</p>

                </div>


                <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 '>
                    add to cart
                </button>

        </div>
    )
}

export default Product