"use client"

import { z } from "zod"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "./CustomInput"
import { authFormSchema } from "@/lib/utils"
import { Loader2 } from "lucide-react"


function AuthForm({ type }: { type: string }) {
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        console.log(values)
        setIsLoading(false)
    }

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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <CustomInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                            />
                            <Button type="submit" className="form-btn">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Signing in...
                                    </>
                                ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </form>
                    </Form>
                </>
            )}
        </section>
    )
}

export default AuthForm