import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFastForward, faFastBackward } from "@fortawesome/free-solid-svg-icons";
import { EventDetails } from '@/lib/dto/events';

const EventList = () => {
    const eventList: EventDetails[] = [
        {
            id: "dasd-dsas-sdwq-asds",
            rule_name: "Chip dumping",
            result: false,
            ts: "12/16/2020 18:30:00 UTC"
        },
        {
            id: "dasd-dsas-sdwq-asds",
            rule_name: "Chip dumping",
            result: false,
            ts: "12/16/2020 18:30:00 UTC"
        },
        {
            id: "dasd-dsas-sdwq-asds",
            rule_name: "Chip dumping",
            result: false,
            ts: "12/16/2020 18:30:00 UTC"
        },
        {
            id: "dasd-dsas-sdwq-asds",
            rule_name: "Chip dumping",
            result: false,
            ts: "12/16/2020 18:30:00 UTC"
        }
    ]
    const pageNumbers: number[] = [1, 2, 3, 4]
    return (
        <div>
            <div className='flex flex-col bg-custom-gray py-2 px-2 overflow-x-auto rounded-xl'>
                {/* Table header  */}
                <div className='flex flex-row items-end px-2 pb-2 table-x border border-x-0 border-t-0 border-gray-600'>
                    <p className='basis-4/12 text-sm font-semibold'>Recent events</p>
                    <div className='basis-8/12 flex flex-row-reverse items-center'>
                        {/* Search bar */}
                        <div className="form-control ">
                            <label className="input-group input-group-xs">
                                <span><FontAwesomeIcon icon={faMagnifyingGlass} className=" text-indigo-600" /></span>
                                <input type="text" placeholder="Filter by ID" className="input input-bordered input-xs" />
                            </label>
                        </div>
                        {/* Toggle */}
                        <p className='basis-4/12 text-sm font-semibold'>Show all</p>
                        <input type="checkbox" className="toggle toggle-s ml-3 mr-3" />
                    </div>
                </div>
                {/* Table */}
                <table className="table table-xs mt-2">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Timestamp</th>
                            <th>Rule</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventList.map((eventData: EventDetails) => (
                            <tr className='hover:bg-indigo-600 hover:cursor-pointer'>
                                <th>{eventData.id}</th>
                                <td>{eventData.ts}</td>
                                <td>{eventData.rule_name}</td>
                                <td>True</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="join mt-3 justify-center">
                    <button className="join-item bg-gray-700 btn btn-sm"><FontAwesomeIcon icon={faFastBackward} className=" text-indigo-600" /></button>
                    {pageNumbers.map((page_no: number) => (
                        <button className="join-item bg-gray-700 btn btn-sm hover:bg-indigo-600 hover:cursor-pointer">{page_no}</button>
                    ))}
                    <button className="join-item bg-gray-700 btn btn-sm"><FontAwesomeIcon icon={faFastForward} className=" text-indigo-600" /></button>
                </div>
            </div >
        </div>
    )
}

export default EventList
