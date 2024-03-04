'use client'
import React from 'react'
import { useGetProducts, ProductType } from '@/Hooks/useGetProduct'
import Product from './Product'

function Products() {

    const products:ProductType[] = useGetProducts()

    return (
        <>
            <div className='grid grid-cols-4 gap-12 p-12'>
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