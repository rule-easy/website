import React from 'react';

import Logo from '../../../components/logo';
import Collapse from './collapse';

const SideBar = () => {
    return (
        <div className='h-full bg-custom-gray'>
            <div className='flex flex-col'>
                <div className='flex flex-row p-4'>
                    <Logo />
                    <a className="ml-4 inline-block align-text-center font-semibold text-gray-300"> RuleItEasy</a>
                </div>
                <div className='h-20'>
                </div>
                <Collapse />
            </div>
        </div>
    )
}

export default SideBar
