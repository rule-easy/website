import React from 'react';

import { RuleDetails } from '@/types/rules';
import {
    faFastBackward, faFastForward, faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RuleList = () => {
    const ruleList: RuleDetails[] = [
        {
            name: "Chip Dumping",
            total_events: 100,
            total_violations: 8
        },
        {
            name: "PDP",
            total_events: 200,
            total_violations: 3
        },
        {
            name: "DP",
            total_events: 1000,
            total_violations: 1
        }
    ]
    const pageNumbers: number[] = [1, 2, 3, 4]

    return (
        <div>
            <div className='flex flex-col bg-custom-gray py-2 px-2 overflow-x-auto rounded-xl'>
                {/* Table header  */}
                <div className='flex flex-row items-end px-2 pb-2 table-x border border-x-0 border-t-0 border-gray-600'>
                    <p className='basis-4/12 text-sm mr-4 font-semibold'>Rules</p>
                    <div className='basis-8/12 flex flex-row-reverse'>
                        {/* Search bar */}
                        <div className="form-control md:display:none">
                            <label className="input-group input-group-xs">
                                <span><FontAwesomeIcon icon={faMagnifyingGlass} className=" text-indigo-600" /></span>
                                <input type="text" placeholder="Filter by name  " className="input input-bordered input-xs" />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <table className="table table-xs mt-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ruleList.map((ruleData: RuleDetails) => (
                            <tr className="hover:bg-indigo-600 hover:cursor-pointer">
                                <th>{ruleData.name}</th>
                                <td>{ruleData.total_violations}/{ruleData.total_events}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex flex-col h-full justify-end'>
                    {/* Pagination */}
                    <div className="join mt-3 justify-center">
                        <button className="join-item bg-gray-700 btn btn-sm"><FontAwesomeIcon icon={faFastBackward} className=" text-indigo-600" /></button>
                        {pageNumbers.map((page_no: number) => (
                            <button className="join-item bg-gray-700 btn btn-sm hover:bg-indigo-600 hover:cursor-pointer">{page_no}</button>
                        ))}
                        <button className="join-item bg-gray-700 btn btn-sm"><FontAwesomeIcon icon={faFastForward} className=" text-indigo-600" /></button>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default RuleList
