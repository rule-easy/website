'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                                <h1 className="h1 mb-4 text-green-400" data-aos="fade-up">Signup success !! </h1>
                                <div className='flex flex-row m-2 justify-center'>
                                    <FontAwesomeIcon icon={faClock} className="btn-lg cursor-pointer outline-none justify-self-center text-indigo-500" />
                                </div>
                                <p className="text-xl text-gray-400 mb-8">It may take upto 4 hours for your account to get activated. Once activated we send an email confirmation to your registered mail address {email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignupSuccess
