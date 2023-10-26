import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

import {
    faArrowLeft, faCirclePlay, faCloud, faCode, faCog, faDatabase, faHouse, faPlus, faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = () => {
    return (
        <div>
            <ul className="menu bg-custom-gray">
                <li className='mb-8'>
                    <Link href="/console" className="text-l font-medium text-gray-300">
                        <FontAwesomeIcon icon={faHouse} className=" pr-4 text-indigo-600" /> DASHBOARD
                    </Link>
                </li>
                <li className='mb-8'>
                    <div className="text-l font-medium text-gray-300 disabled">
                        <FontAwesomeIcon icon={faPlus} className=" pr-4 text-indigo-600" /> CREATE
                    </div>
                    <ul>
                        <li>
                            <Link href="/console/streams/create" className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                <FontAwesomeIcon icon={faDatabase} /> STREAM
                            </Link>
                        </li>
                        <li>
                            <Link href="/console/rules/create" className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                <FontAwesomeIcon icon={faShieldHalved} /> RULE
                            </Link>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <div className="text-l font-medium text-gray-300">
                                        ML RULES
                                    </div>
                                </summary>
                                <li>
                                    <Link href="/console/datasources/create" className='text-l text-gray-400 ml-4 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                        <FontAwesomeIcon icon={faCloud} /> DATASOURCE
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/console/workflows/create" className='text-l text-gray-400 ml-4 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                        <FontAwesomeIcon icon={faCirclePlay} /> WORKFLOW
                                    </Link>
                                </li>
                            </details>
                        </li>

                    </ul>
                </li>

                <li className='mb-8'>
                    <div className="text-l font-medium text-gray-300">
                        <FontAwesomeIcon icon={faCog} className=" pr-4 text-indigo-600" /> SETTINGS
                    </div>
                    <ul>
                        <li>
                            <div onClick={() => signOut()} className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                <FontAwesomeIcon icon={faCode} className="pl-4" /> DEVLOPER
                            </div>
                        </li>
                    </ul>
                </li>

                <li className='mb-8'>
                    <div className="text-l font-medium text-gray-300">
                        <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> AUTH
                    </div>
                    <ul>
                        <li>
                            <div onClick={() => signOut()} className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                <FontAwesomeIcon icon={faArrowLeft} className="pl-4" /> SIGN OUT
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default Collapse
