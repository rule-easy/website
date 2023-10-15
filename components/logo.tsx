import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Link href="/" className="block" aria-label="Cruip">
                <svg className="w-6 h-6" viewBox="0 0 260 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M87.6306 64.75L130 0.904255L172.369 64.75H87.6306Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M44.6306 129.75L87 65.9043L129.369 129.75H44.6306Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M130.631 129.75L173 65.9043L215.369 129.75H130.631Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M173.631 194.75L216 130.904L258.369 194.75H173.631Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M1.63062 194.75L44 130.904L86.3694 194.75H1.63062Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M44.6306 259.75L87 195.904L129.369 259.75H44.6306Z" fill="#5D5DFF" stroke="#5D5DFF" />
                    <path d="M130.631 259.75L173 195.904L215.369 259.75H130.631Z" fill="#5D5DFF" stroke="#5D5DFF" />
                </svg>
            </Link>
        </div>
    )
}

export default Logo
