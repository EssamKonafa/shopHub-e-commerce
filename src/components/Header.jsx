'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from '../context/authContext'
import { handleSignOut } from '../../firebase/auth'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

function Header() {


    const { currentUser } = useAuth()

    const selectedProduct = useSelector((state) => state.cart.products)
    const wishList = useSelector((state) => state.wishList.wishList)

    const [searchIndex, setSearchIndex] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [loader, setLoader] = useState(true)

    function handleSearchChange(event) {
        setSearchIndex(event.target.value)
    }

    async function searchHandling() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/?search=${searchIndex}`)
            const result = await response.json()
            setSearchResult(result)
        } catch (err) {
            console.error(err);
        } finally {
            setLoader(false)
        }
    }

    const router = useRouter()

    function handleResultNavigate(id) {
        router.push(`productinfo/${id}`)
    }

    function showAlert() {
        Swal.fire({
            icon: 'success',
            title: 'sign out',
            text: 'Signed out successfully!'
        })
    }

    useEffect(() => {
        if (searchIndex.length > 0) {
            searchHandling()
        }
    }, [searchIndex])

    return (
        <>
            <header className='bg-white shadow-md flex p-2'>

                <div className='lg:w-9/12 justify-between    md:w-10/12  md:flex flex-row-reverse  '>

                    <div className=' self-end sm: pb-2'>
                        <Link href={'/'}>
                            <Image
                                src={logo}
                                width={200}
                                height={50}
                                alt='logo'
                                className='w-40 h-8'
                            />
                        </Link>
                    </div>

                    <div className='my-auto'>
                        <input
                            type='text'
                            placeholder=' search...'
                            className='border-b border-gray-500 rounded-xl p-2 pl-7 focus:bg-gray-100'
                            value={searchIndex}
                            onChange={handleSearchChange}
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                        />
                        <div className='lg:absolute top-4 mt-0.5 pl-1 text-center md:absolute sm:absolute sm:top-5 xs:absolute  xs:top-14 '>
                            <SearchOutlinedIcon className='text-gray-700 text-center ' />
                        </div>
                        {isInputFocused && (
                            <div className='absolute bg-gray-100 shadow-xl  gap-5 p-2 max-w-64  rounded-xl mb-2'>
                                {searchResult.slice(0, 3).map((result) => (
                                    <div key={result.id} className='flex border rounded-md items-center gap-4 m-2 p-2 cursor-pointer' onClick={() => handleResultNavigate(result.id)}  >
                                        <img src={result.image} className='w-50 h-10' alt={result.title} />
                                        <p className='line-clamp-1  '>{result.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className='flex gap-4 items-center self-end md:w-7/12 sm:w-9/12 xs:w-9/12 justify-end  ' >

                    <div className='text-sm font-semibold pl-2'>
                        {currentUser ?
                            (<>
                                <div className=''>
                                    <p>

                                        Hello, {currentUser.email.length > 5 ? `${currentUser.email.substring(0, 5)}` : currentUser.email}
                                    </p>
                                    <button onClick={() => handleSignOut().then(()=>showAlert())}><p className='hover:text-red-600'>sign out</p></button>
                                </div>
                            </>)
                            :
                            (<>
                                <div>
                                    <p>Hello</p>
                                    <Link className='hover:text-blue-600' href={'/signin'}>sign in</Link>
                                </div>
                            </>)}
                    </div>

                    <div className='flex text-center font-semibold text-sm gap-4 '>
                        <Link href={'/wishlist'} >
                            <p className='absolute border border-black rounded-3xl flex justify-center items-center p-2 w-3 h-3 bg-blue-400'>{wishList.length}</p>
                            <LoyaltyOutlinedIcon style={{ fontSize: '35', marginLeft: '10px' }} />
                            <p>WishList</p>
                        </Link>

                        {/* top-2 right-7 */}

                        <Link href={'/cart'}  >
                            <p className='absolute border border-black rounded-3xl flex justify-center items-center p-2 w-3 h-3 bg-blue-400 '>{selectedProduct.length}</p>
                            <ShoppingCartOutlinedIcon style={{ fontSize: '35', marginLeft: '11px' }} />
                            <p>Cart</p>
                        </Link>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header