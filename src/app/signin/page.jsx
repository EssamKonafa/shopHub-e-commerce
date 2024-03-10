'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { signInWithE_PW } from '../../../firebase/auth';
import Link from 'next/link';
// import Cookies from 'js-cookie';

function page() {

    const router = useRouter();
    const [isSignin, setIsSignin] = useState(false)

    const onSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            if (!isSignin) {
                setIsSignin(true);
                await signInWithE_PW(values.email, values.password);

                // Redirect after successful sign-in
                router.push('/');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            setErrors({ password: 'Invalid email or password' });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className=' mt-16 '>

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'required'
                    }
                    if (!values.password) {
                        errors.password = 'required'
                    }
                    return errors
                }}
                onSubmit={onSubmit}
            >
                <div className='max-w-md mx-auto'>


                    <Form >
                        <div className='border bg-white rounded-md p-4 '>
                            <h1 className='font-bold mb-3 text-xl'>Sign in</h1>

                            <div className='mb-2'>
                                <label htmlFor='MN' className='block font-bold text-sm mb-1'>Email</label>
                                <Field
                                    className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                    type='text'
                                    id='MN'
                                    name='email'
                                />
                                <div className='text-red-500 text-xs mt-1'>
                                    <ErrorMessage name='email' />
                                </div>
                            </div>

                            <div className='mb-2'>
                                <label htmlFor='PW' className='block font-bold text-sm mb-1'>Password</label>
                                <Field
                                    className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                    type='password'
                                    id='PW'
                                    placeholder='At least 6 characters'
                                    name='password'
                                />
                                <div className='text-red-500 text-xs mt-1'>
                                    <ErrorMessage name='password' />
                                </div>
                            </div>

                            <button className='bg-gray-200 rounded-md p-2 hover:bg-black hover:text-white transition duration-300 px-20p-1.5 w-full' type='submit'>Continue</button>

                            <hr className='border' />


                        </div>
                    </Form>
                    <p className='text-center my-3'>new to shopHub ?</p>
                    <div className=' text-center my-3'>
                        <Link href={'/signup'} className='bg-white rounded-md p-2 hover:bg-black hover:text-white transition duration-300 shadow w-full'>create yor shopHub account</Link>
                    </div>
                </div>

            </Formik>

            {/* <div className='footer border-t text-center mt-auto fixed bottom-0 w-full p-2'>
                <p>© 1996-2024, shopHub.com, Inc.</p>
            </div> */}

        </div>
    )
}

export default page