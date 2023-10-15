'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import SigninButton from '@/components/signin-button'
import Providers from './Provider'
import Console from './page'
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
