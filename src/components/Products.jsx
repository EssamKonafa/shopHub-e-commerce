'use client'
import React from 'react'
import { useGetProducts, ProductType } from '@/Hooks/useGetProduct'
import Product from './Product'
import Loader from './Loader'

function Products() {

    const { products, loader } = useGetProducts();

    return (
        <div className='relative'>
            {loader && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <Loader />
                </div>
            )}

            <div className='grid xl:grid-cols-5 gap-12 p-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:-mt-80'>
                {products.map((product) => (
                    <div key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;