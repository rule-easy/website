'use client'

import React, { useState, FormEvent } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Landing() {
    // const { data: session } = useSession();

    // if (session) {
    //     return (
    //         <div className="flex gap-4 ml-auto">
    //             {/* <p className="text-sky-600">{session.user.name}</p> */}

    //         </div>
    //     );
    // }
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4" data-aos="fade-up">
                            Landing
                        </h1>
                        <button onClick={() => signIn()} className="text-red-600">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
