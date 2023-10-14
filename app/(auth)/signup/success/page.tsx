'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

function SignupSuccess() {
    const searchParams = useSearchParams()
    const email = searchParams.get('email')

    return (
        <div>
            <section data-aos="fade-up" data-aos-delay="200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 w-100">
                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h1 mb-4" data-aos="fade-up">Signup successful !! </h1>
                                <p className="text-xl text-gray-400 mb-8">We will send a verification mail to your registerted email {email} to verify the account. Post verification you can start enjoying the platform <a href="/" className='text-indigo-600 font-bold'>PatternAct</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignupSuccess
