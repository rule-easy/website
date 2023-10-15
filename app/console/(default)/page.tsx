import UpperStats from '@/components/upper-stats'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row text-gray-400 text-sm mb-2'>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 underline underline-offset-4'>1 hr</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>4 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>8 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>16 hrs</p>
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>1 day</p>
                </div>
                <UpperStats />
                <div className='flex-grow flex-col-reverse'>
                    <div className="overflow-x-auto rounded-xl bg-custom-gray mt-10">
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
                    </div >
                </div>
            </div>


        </div >
    )
}

export default Dashboard
