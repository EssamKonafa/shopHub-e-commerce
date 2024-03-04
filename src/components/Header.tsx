import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
    return (
        <>
            <header className='bg-white shadow-md flex p-5 border-2 justify-between items-center'>

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
                    <Link href={'/cart'}>cart</Link>
                    <Link href={'/user'}>user</Link>
                    <Link href={'/wishlist'}>wishlist</Link>
                </div>

            </header>
        </>
    )
}

export default Header