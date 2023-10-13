'use client'

import Link from 'next/link'
import React, { useState, FormEvent } from 'react'
import { SignUp as SignUpSvc } from '@/lib/services/auth'
import { AuthResponse, SignupRequest } from '@/lib/dto/auth'
import { redirect } from 'next/navigation'

export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [passWord, setPassWord] = useState<string>("")
  const [companyName, setCompanyName] = useState<string>("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
    const signUpReq: SignupRequest = { email: email, company: companyName, password: passWord, name: fullName }
    try {
      const data: AuthResponse = await SignUpSvc(signUpReq);
      console.log("Successfully logged in and redirecting :", data.data?.jwt)
      redirect('/signin')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={onSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input value={passWord} onChange={(e) => setPassWord(e.target.value)} id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" disabled={isLoading}>Sign up</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already using PatternAct? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
