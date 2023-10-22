import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const EventList = () => {
    return (
        <div>
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
    )
}

export default EventList
