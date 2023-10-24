import Link from 'next/link';
import React from 'react';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateStreamSuccess = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 w-100">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 mb-4 text-custom-green" data-aos="fade-up">Congratulations !!</h1>
                    <h1 className="h2 mb-4" data-aos="fade-up">Stream created successfully</h1>
                    <p className="text-xl text-gray-400 mb-8">Now take it one step ahead by creating a new rule and attach to stream</p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <Link href="/console/rules/create">
                            <button type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create new rule <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStreamSuccess
