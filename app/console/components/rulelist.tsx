import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RuleDetails } from '@/lib/dto/rules';

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
    return (
        <div>
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
                    {ruleList.map((ruleData: RuleDetails) => (
                        <tr>
                            <th>{ruleData.name}</th>
                            <td>{ruleData.total_violations}/{ruleData.total_events}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RuleList
