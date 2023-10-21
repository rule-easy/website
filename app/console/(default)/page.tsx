import UpperStats from '@/components/upper-stats'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <div>
            <div className='flex flex-col'>
                {/* Time selector */}
                <div className='flex flex-row text-gray-400 text-sm mb-2'>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 underline underline-offset-4'>1 hr</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>4 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>8 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>16 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>1 day</p>
                </div>
                {/* Upper stats */}
                <UpperStats />
                {/* Chart and rules */}
                <div className='flex flex-row my-5 h-80'>
                    {/* Chart */}
                    <div className='basis-8/12 h-full rounded-xl overflow-x-auto bg-custom-gray mr-2'>
                        <div className="">
                            <div className='flex flex-row p-4 items-end'>
                                <p className='basis-4/12 text-sm mr-4 font-semibold'>Streams</p>
                                <div className='basis-8/12 flex flex-row-reverse items-center'>
                                    <select className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled selected>Tiny</option>
                                        <option>Tiny Apple</option>
                                        <option>Tiny Orange</option>
                                        <option>Tiny Tomato</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rules table */}
                    <div className='basis-4/12 h-full rounded-xl overflow-x-auto bg-custom-gray ml-2 '>
                        {/* Table header */}
                        <div className='flex flex-row p-4 items-end'>
                            <p className='basis-4/12 text-sm mr-4 font-semibold'>Rules</p>
                            <div className='basis-8/12 flex flex-row-reverse items-center'>
                                <div className="form-control ">
                                    <label className="input-group input-group-xs">
                                        <span><FontAwesomeIcon icon={faMagnifyingGlass} className=" text-indigo-600" /></span>
                                        <input type="text" placeholder="Filter by name" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Table body */}
                        <table className="table table-xs p-2">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Stats</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Chip dumping</th>
                                    <td>8/1200</td>
                                </tr>
                                <tr>
                                    <th>PDP</th>
                                    <td>8/1200</td>
                                </tr>
                                <tr>
                                    <th>Chip dumping</th>
                                    <td>8/1200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Events table */}
                <div className='flex flex-col bg-custom-gray p-2 overflow-x-auto rounded-xl'>
                    {/* Table header  */}
                    <div className='flex flex-row p-4 items-end'>
                        <p className='basis-4/12 text-sm mr-4 font-semibold'>Recent events</p>
                        <div className='basis-8/12 flex flex-row-reverse items-center'>
                            <div className="form-control ">
                                <label className="input-group input-group-xs">
                                    <span><FontAwesomeIcon icon={faMagnifyingGlass} className=" text-indigo-600" /></span>
                                    <input type="text" placeholder="Filter by ID" className="input input-bordered input-xs" />
                                </label>
                            </div>
                            <p className='basis-4/12 text-sm mr-4 font-semibold'>Show all</p>
                            <input type="checkbox" className="toggle toggle-s ml-3 mr-3" />
                        </div>
                    </div>
                    {/* Table */}
                    <table className="table table-xs p-2">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Timestamp</th>
                                <th>Rule</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <th>dsad-asds-232w-dasd</th>
                                <td>12/16/2020 18:30:00 UTC</td>
                                <td>Chip dumping</td>
                                <td>True</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="join">
                        <button className="join-item btn">«</button>
                        <button className="join-item btn">Page 22</button>
                        <button className="join-item btn">»</button>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default Dashboard
