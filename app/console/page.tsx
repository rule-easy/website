'use client'

import React, { useState, FormEvent } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import SideBar from '@/components/sidebar';

export default function Console({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session } = useSession();

    if (true) {
        return (
            <section>
                <div className="max-w-6xl mx-auto h-full relative">
                    <div className='grid grid-cols-12 gap-0.5'>
                        <div className='col-span-3'>
                            <SideBar></SideBar>
                        </div>
                        <div className='col-span-9 bg-gray-700 pt-10'>
                            <div className='flex flex-col'>
                                <div className='flex flex-grow justify-center'>
                                    {children}
                                </div>
                            </div>
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
