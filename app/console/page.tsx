'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';

import SideBar from '@/app/console/components/sidebar';

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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <button onClick={() => signIn()} className="text-red-600">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
