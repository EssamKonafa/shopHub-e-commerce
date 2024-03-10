'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import * as Yup from 'yup'
import { useFormik } from "formik"
import { useRouter } from 'next/navigation'
import { createUSer, } from '../../../firebase/auth'
import Header from '@/components/Header'
import RootLayout from '../layout'
import Link from 'next/link'

function page() {

    const router = useRouter();

    const pathname = router.pathname || ''

    const headerDisplay = !pathname.includes('/signup')

    const [isRegistering, setIsRegistering] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your name'),
        email: Yup.string().required('Enter your email').email('Invalid email address'),
        password: Yup.string().required('Minimum 6 characters required'),
        reEnterPassword: Yup.string().oneOf([Yup.ref('password'),null],'password must match')
    })

    const onSubmit = async (values) => {
        try {
            if(!isRegistering) {
                setIsRegistering(true)
                await createUSer(values.email, values.password)

            }
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            reEnterPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    })

    return (
        <>
            <div className='max-w-md mx-auto'>

                <form onSubmit={formik.handleSubmit}>
                    <div className='border bg-white rounded-md p-4 mt-10'>
                        <h1 className='font-bold mb-3 text-xl'>Create account</h1>

                        <div className='mb-2'>
                            <label htmlFor='CAccount' className='block font-bold text-sm mb-1'>Your name</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='text'
                                id='CAccount'
                                placeholder='First and last name'
                                {...formik.getFieldProps('name')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.name && formik.errors.name}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='MN' className='block font-bold text-sm mb-1'>Email</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='text'
                                id='MN'
                                {...formik.getFieldProps('email')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.email && formik.errors.email}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='PW' className='block font-bold text-sm mb-1'>Password</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='password'
                                id='PW'
                                placeholder='At least 6 characters'
                                {...formik.getFieldProps('password')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.password && formik.errors.password}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='RPW' className='block font-bold text-sm mb-1'>Re-enter password</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='password'
                                id='RPW'
                                {...formik.getFieldProps('reEnterPassword')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.reEnterPassword && formik.errors.reEnterPassword}
                            </div>
                        </div>

                        <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 px-20p-1.5 w-full mt-3' type='submit'>Continue</button>
                        
                        <div className='mt-3'>
                            Already have an account? <Link className=' hover:text-blue-600 hover:font-bold font-semibold ' href='/signin'>Sign in</Link>
                        </div>
                        
                    </div>
                </form>
            </div>

            {/* <div className='footer border-t text-center mt-auto fixed bottom-0 w-full p-2'>
                <p>©2024, shopHub.com, Inc.</p>
            </div> */}
        </>
    )
}

export default page