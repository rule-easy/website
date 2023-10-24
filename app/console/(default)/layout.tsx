'use client'

import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

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
                <div className='p-5'>
                    {children}
                </div>
            </main >
        </>
    )
}
