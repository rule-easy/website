import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDatabase, faArrowLeft, faBookAtlas, faBrain, faShieldHalved, faChartPie, faCode, faGlobe, faCircleXmark, faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";

const Collapse = () => {
    return (
        <div>
            <ul className="menu bg-custom-gray">
                <li>
                    <div className="collapse-title text-l font-medium text-gray-300">
                        <FontAwesomeIcon icon={faHouse} className=" pr-4 text-indigo-600" /> DASHBOARD
                    </div>
                </li>
                <li>
                    <div className="collapse-title text-l font-medium text-gray-300">
                        <FontAwesomeIcon icon={faDatabase} className=" pr-4 text-indigo-600" /> DATA SOURCE
                    </div>
                    <ul>
                        <li className='active'>
                            <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                CREATE
                            </div>
                        </li>
                        <li>
                            <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                UPDATE
                            </div>
                        </li>
                        <li>
                            <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                VIEW
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <details>
                        <summary>
                            <div className="collapse-title text-l font-medium text-gray-300">
                                <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> RULE
                            </div>
                        </summary>
                        <ul>
                            <li className='active'>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    CREATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    UPDATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    VIEW
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            <div className="collapse-title text-l font-medium text-gray-300">
                                <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> STREAMS
                            </div>
                        </summary>
                        <ul>
                            <li className='active'>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    CREATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    UPDATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    VIEW
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            <div className="collapse-title text-l font-medium text-gray-300">
                                <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> WORKFLOWS
                            </div>
                        </summary>
                        <ul>
                            <li className='active'>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    CREATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    UPDATE
                                </div>
                            </li>
                            <li>
                                <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    VIEW
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            <div className="collapse-title text-l font-medium text-gray-300">
                                <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> AUTH
                            </div>
                        </summary>
                        <ul>
                            <li>
                                <div onClick={() => signOut()} className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                                    <FontAwesomeIcon icon={faArrowLeft} className="pl-4" /> SIGN OUT
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>

    )
}

export default Collapse
