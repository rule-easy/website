'use client'

import 'aos/dist/aos.css';

import AOS from 'aos';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import SideBar from '@/app/console/components/sidebar';
import PageIllustration from '@/components/page-illustration';
import Footer from '@/components/ui/footer';

import Providers from './Provider';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        })
    })

    return (
        <section>
            <main className="grow">
                <Providers>
                    <PageIllustration />
                    <div className='pt-20'>
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
                    </div>
                </Providers>
            </main >
            <Footer />
        </section>
    )
} 
