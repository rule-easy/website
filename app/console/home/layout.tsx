'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import SigninButton from '@/components/signin-button'
import Providers from './Provider'
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
                    <div className='pt-20 h-full'>
                        {children}
                    </div>
                </Providers>
            </main >

            <Footer />
        </>
    )
}
