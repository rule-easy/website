'use client'

import { signIn, useSession } from 'next-auth/react';
import React from 'react';

import SideBar from '@/app/console/components/sidebar';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Console({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session } = useSession();

    if (session) {
        return (
            <section>
                <div className="max-w-6xl mx-auto relative">
                    <div className='grid grid-cols-12 gap-0.5'>
                        {/* Side bar */}
                        <div className='col-span-3'>
                            <SideBar></SideBar>
                        </div>
                        {/* Console body */}
                        <div className='col-span-9 bg-gray-700 pt-10'>
                            {children}
                        </div>
                    </div>
                </div>
            </section >
        );
    } else {
        return (
            <section>
                <div className="max-w-12xl mx-auto px-4 sm:px-6 relative">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="flex col-span-6 justify-center">
                            <button onClick={() => signIn()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">  Sign In <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}
