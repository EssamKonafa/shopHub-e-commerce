'use client'
import React from 'react'
import { useGetProducts, ProductType } from '@/Hooks/useGetProduct'
import Product from './Product'

function Products() {

    const products:ProductType[] = useGetProducts()
console.log(products);

    return (
        <>
            <div className='grid xl:grid-cols-5 gap-12 p-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                {products.map((product) => (
                    <div key={product.id}>
                        <Product product={product}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products