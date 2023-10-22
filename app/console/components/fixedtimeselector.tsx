import React from 'react'

const FixedTimeSelector = () => {
    const fixedTimes = ["1 hr", "4 hrs", "8 hrs", "16 hrs", "1 day"]
    return (
        <div>
            <div className='flex flex-row text-gray-400 text-sm mb-2'>
                {fixedTimes.map((fixedTime) => (
                    <p className='basis-1/12 decoration-2 decoration-indigo-500 hover:underline hover:underline-offset-4 hover:cursor-pointer'>{fixedTime}</p>
                ))}
                {/* <p className='basis-1/12 decoration-2 decoration-indigo-500 underline underline-offset-4'>1 hr</p> */}
            </div>
        </div>
    )
}

export default FixedTimeSelector
