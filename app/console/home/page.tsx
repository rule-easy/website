'use client'

import React, { useState, FormEvent } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from '@/components/menu';
import SideBar from '@/components/sidebar';
import ConsoleMenu from '@/components/consolemenu';

export default function Landing() {
    const { data: session } = useSession();

    if (true) {
        return (
            <section>
                <div className="max-w-6xl mx-auto h-full relative">
                    <div className='grid grid-cols-12 gap-0.5'>
                        <div className='col-span-3'>
                            <SideBar></SideBar>
                        </div>
                        <div className='col-span-9 bg-gray-700'>
                            <div className='flex flex-col'>
                                <ConsoleMenu />
                                <div className='h-48'> Hello </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
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
