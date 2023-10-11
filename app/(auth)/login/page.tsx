'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import { signIn } from "next-auth/react";

export default function Login() {
  const userEmail = useRef("")
  const userPassword = useRef("")

  const onSubmit = async () => {
    console.log("Requesting authenticaion", userEmail.current, userPassword.current)
    const result = await signIn();
    // const result = await signIn("credentials", {
    //   email: userEmail.current,
    //   password: userPassword.current,
    //   redirect: true,
    //   callbackUrl: "/landing",
    // });
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

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
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
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
