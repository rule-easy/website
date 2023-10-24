'use client'

import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import PageIllustration from '@/components/page-illustration';
import SigninButton from '@/components/signin-button';
import Footer from '@/components/ui/footer';

import Console from './page';
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
        <>
            <main className="grow">
                <Providers>
                    <PageIllustration />
                    <div className='pt-20'>
                        <Console>
                            {children}
                        </Console>
                    </div>
                </Providers>
            </main >

            <Footer />
        </>
    )
}
