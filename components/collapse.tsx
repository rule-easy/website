import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faDatabase, faBookAtlas, faBrain, faShieldHalved, faChartPie, faCode, faGlobe, faCircleXmark, faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Collapse = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-transparent bg-gray-800">
                <div className="collapse-title text-l font-medium text-gray-300">
                    <FontAwesomeIcon icon={faDatabase} className=" pr-4 text-indigo-600" /> DATA SOURCE
                </div>
                <div className="collapse-content grid grid-cols-1 divide-y divide-gray-700">
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        CREATE
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        VIEW
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        UPDATE
                    </div>
                </div>

            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-transparent bg-gray-800">
                <div className="collapse-title text-l font-medium text-gray-300">
                    <FontAwesomeIcon icon={faBan} className=" pr-4 text-indigo-600" /> WORKFLOW
                </div>
                <div className="collapse-content grid grid-cols-1 divide-y divide-gray-700">
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        CREATE
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        VIEW
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        UPDATE
                    </div>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-transparent bg-gray-800">
                <div className="collapse-title text-l font-medium text-gray-300">
                    <FontAwesomeIcon icon={faShieldHalved} className=" pr-4 text-indigo-600" /> RULE
                </div>
                <div className="collapse-content grid grid-cols-1 divide-y divide-gray-700">
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        CREATE
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        VIEW
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        UPDATE
                    </div>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-transparent bg-gray-800">
                <div className="collapse-title text-l font-medium text-gray-300">
                    <FontAwesomeIcon icon={faBan} className=" pr-4 text-indigo-600" /> STREAMS
                </div>
                <div className="collapse-content grid grid-cols-1 divide-y divide-gray-700">
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        CREATE
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        VIEW
                    </div>
                    <div className='text-l text-gray-400 pt-2 pb-2 hover:text-indigo-600 hover:cursor-pointer hover:font-bold'>
                        UPDATE
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Collapse
