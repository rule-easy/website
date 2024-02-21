'use client'
//NOTE: Based on https://github.com/vahid-nejad/custom-login-page-intercepting-routes

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';

export default function Login() {
    const userEmail = useRef("")
    const userPassword = useRef("")
    const searchParams = useSearchParams()
    const errorMsg = searchParams.get('error')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Requesting authenticaion", userEmail.current, userPassword.current)
        const result = await signIn("credentials", {
            email: userEmail.current,
            password: userPassword.current,
            redirect: true,
            callbackUrl: "/getstarted",
        });
    };

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Failed authentication */}
                    {!!errorMsg && (
                        <p className="bg-red-100 text-red-600 text-center p-2">
                            Authentication Failed
                        </p>
                    )}
                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                                    <input onChange={(e) => (userEmail.current = e.target.value)} id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                                    <input onChange={(e) => (userPassword.current = e.target.value)} id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <div className="flex justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-gray-400 ml-2">Keep me signed in</span>
                                        </label>
                                        <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Get token</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-gray-400 text-center mt-6">
                            Don't you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
