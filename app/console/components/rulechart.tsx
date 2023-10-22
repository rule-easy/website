import React from 'react'

const RuleChart = () => {
    return (
        <div>
            <div className='flex flex-col'>
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
                <div className='flex flex-row-reverse'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Violations</span>
                            <input type="radio" className="radio radio-primary" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Evals</span>
                            <input type="radio" className="radio radio-primary checked:bg-blue-500" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RuleChart
