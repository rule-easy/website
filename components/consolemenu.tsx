import React from 'react'
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBoltLightning, faBookAtlas, faBrain, faChartLine, faChartPie, faCode, faGlobe, faCircleXmark, faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ConsoleMenu = () => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className="flex justify-start col-span-6">
                    {/* <div className="btn-group ml-1">
                        <button className="btn btn-active">Button</button>
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                    </div> */}
                    {/* <button className="flex items-center justify-center mr-0.5 border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><FontAwesomeIcon icon={faBan} className=" text-indigo-100" /></button>
                    <button className="flex items-center justify-center mr-0.5 border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><FontAwesomeIcon icon={faChartLine} className=" text-indigo-100" /></button>
                    <button className="flex items-center justify-center mr-0.5 border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><FontAwesomeIcon icon={faGlobe} className=" text-indigo-100" /></button> */}
                </div>
                <div className="flex justify-end col-span-6">
                    <button onClick={() => signOut()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign out <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                </div>
            </div>
        </div >
    )
}

export default ConsoleMenu
