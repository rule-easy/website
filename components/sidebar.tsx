import React from 'react'
import Collapse from './collapse'
import Link from 'next/link'
import Logo from './logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
    return (
        <div className='bg-custom-gray'>
            <div className='flex flex-col'>
                <div className='flex flex-row p-4'>
                    <Logo />
                    <a className="ml-4 inline-block align-text-center font-semibold text-gray-300"> PATTERNACT</a>
                </div>
                <div className='h-20'>
                </div>
                <Collapse />
            </div>
        </div>
    )
}

export default SideBar
