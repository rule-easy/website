'use client'
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

import GetStarted from '@/app/(static)/playground/get-started';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Documentation() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <GetStarted />
            </>
        )
    } else {
        return (
            <section>
                <div className="max-w-12xl mx-auto px-4 sm:px-6 relative">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="flex col-span-6 justify-center">
                            <button onClick={() => signIn()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">  Generate your token <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                        </div>
                    </div>
                </div>
            </section >
        );
    }

}
