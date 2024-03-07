'use client'
import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useAuth } from '@/context/authContext'
import {useAuth} from '../context/authContext'

function Header() {
    // const {userLogged}=useAuth()
    // const [userName, setUserName] = useState('');

    // useEffect(() => {
    //   // Listen for changes in authentication state
    //   if (currentUser) {
    //     setUserName(currentUser.displayName || currentUser.email);
    //   } else {
    //     setUserName('');
    //   }
    // }, [currentUser]);
    // console.log(userLogged);
    
    
    const selectedProduct = useSelector((state) => state.cart.products)
    const wishList = useSelector((state)=>state.wishList.wishList)

    return (
        <>
            <header className='bg-white shadow-md flex p-5 justify-between items-center'>

                <div>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            width={200}
                            height={50}
                            alt='logo'
                        />
                    </Link>
                </div>

                <div>
                    <input
                        type='text'
                        placeholder=' search...'
                        className='border-b-2'
                    />
                </div>

                <div className='flex gap-2'>
                    <Link href={'/user'}>hello user</Link>
                    <Link href={'/wishlist'}><LoyaltyOutlinedIcon/>WishList{wishList.length}</Link>
                    <Link href={'/cart'}><ShoppingCartOutlinedIcon/>Cart{selectedProduct.length}</Link>
                </div>

            </header>
        </>
    )
}

export default Header