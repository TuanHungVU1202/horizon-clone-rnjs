'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function AuthForm({ type }: { type: string }) {
    const [user, setUser] = React.useState(null)

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer items-center flex gap-1 px-4">
                    <Image src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                            ? 'Link account'
                            : type === 'sign-in'
                                ? 'Sign in'
                                : 'Sign Up'
                        }

                        <p className='text-14 font-normal text-gray-600'>
                            {user
                                ? 'Link your account'
                                : 'Please enter your email and password'
                            }
                        </p>
                    </h1>
                </div>
            </header>

            {user ? (
                <div className="flex flex-col gap-4">
                    {/* Plaid link */}
                </div>
            ) : (
                <>
                    FORM
                </>
            )}
        </section>
    )
}

export default AuthForm