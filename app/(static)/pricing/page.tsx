import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowRight, faBan, faBoltLightning, faCheckCircle, faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;
export const metadata = {
    title: 'Pricing - PatternAct',
    description: 'PatternAct pricing page',
}

export default function Pricing() {
    return (
        <>
            <section data-aos="fade-up" data-aos-delay="200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 w-100">
                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h1 mb-4" data-aos="fade-up">Protect your profits today</h1>
                                <p className="text-xl text-gray-400 mb-8">Begin at no cost to discover patterns and protect the vital revenue streams of online enterprises</p>
                            </div>
                        </div>
                        {/* Table */}
                        <div className="flex flex-col divide-y divide-gray-700" >
                            {/* Table header */}
                            <div className="grid grid-cols-3 text-left md:mb-8">
                                <div className="flex flex-col mr-8">
                                    <div className="flex flex-row justify-left mb-1">
                                        <FontAwesomeIcon icon={faBan} className="pr-2 text-indigo-600" />
                                        <span className="inline-block font-semibold align-text-top text-gray-200"> No PII data required to start</span>
                                    </div>
                                    <div className="flex flex-row justify-left mb-1">
                                        <FontAwesomeIcon icon={faBoltLightning} className="pr-2 text-indigo-600" />
                                        <span className="inline-block font-semibold align-text-top text-gray-200"> Integrate in Minutes</span>
                                    </div>
                                    <div className="flex flex-row justify-left mb-1">
                                        <FontAwesomeIcon icon={faBan} className="pr-2 text-indigo-600" />
                                        <span className="inline-block font-semibold align-text-top text-gray-200"> Real-Time Intelligence</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mr-4">
                                    <div className='h2 mb-4 text-custom-primary text-2xl'> Free </div>
                                    <span className="inline-block font-semibold align-text-top text-gray-200"> Ideal for biz that are just starting up</span>
                                    <span className="inline-block align-text-top text-gray-600"> No PII data required to start</span>
                                    <br></br>
                                    <button type="submit" className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">Get started <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                                </div>
                                <div className="flex flex-col mr-4">
                                    <div className='h2 mb-4 text-custom-primary text-2xl'> Pro </div>
                                    <span className="inline-block font-semibold align-text-top text-gray-200"> Ideal for biz that are just starting up</span>
                                    <span className="inline-block align-text-top text-gray-600"> No PII data required to start</span>
                                    <br></br>
                                    <button type="submit" className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Get pricing <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                                </div>
                            </div>
                            {/* Table row-1 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3 "> ML playground</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            {/* Table row-2 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3"> Access to models</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Basic</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Advanced</span>
                            </div>
                            {/* Table row-3 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">ML rules</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            {/* Table row-4 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Total ML workflows</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">5 per week</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Unlimited</span>
                            </div>
                            {/* Table row-4 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">ML data size</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 50 MB</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 1GB</span>
                            </div>

                            {/* Core platform features */}
                            <div className="grid grid-cols-1">
                                <span className="inline-block text-center font-bold mt-3 mb-3 text-indigo-600">Core platform features</span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Historical analysis</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Data retention</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">7 days</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">60 days</span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Webhook support</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Number of rules</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 5</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 50</span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Free rule evaluation</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 10K requests</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">Upto 25K requests</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">On-demand rule evaluation</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">$30 per 10K req</span>
                                {/* <button type="submit" className="w-2/3 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">On request <FontAwesomeIcon icon={faArrowRight} color="#FFF" className="pl-4" /></button> */}
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">24X7 support</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Alerts on rules</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>

                            {/* Console features */}
                            <div className="grid grid-cols-1">
                                <span className="inline-block text-center font-bold mt-3 mb-3 text-indigo-600">Console features</span>
                            </div>
                            {/* Table row-6 */}
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Number of admin users</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">1</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3 text-indigo-100">5</span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Team support</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                            <div className="grid grid-cols-3 text-left">
                                <span className="inline-block text-gray-500 text-left font-semibold mt-3 mb-3">Historical performance</span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCircleXmark} size="xl" className="text-custom-red" /></span>
                                <span className="inline-block text-center font-semibold mt-3 mb-3"><FontAwesomeIcon icon={faCheckCircle} size="xl" className="text-custom-green" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
