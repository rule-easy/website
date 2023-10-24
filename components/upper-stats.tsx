import React from 'react';

const UpperStats = () => {
    return (
        <div>
            <div className="stats shadow w-full">

                <div className="stat place-items-center">
                    <div className="stat-title">Rules</div>
                    <div className="stat-value">13</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Events</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc text-custom-green"> Up 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Violations</div>
                    <div className="stat-value">10</div>
                    <div className="stat-desc text-custom-red"> 90 (14%)</div>
                </div>

            </div>
        </div>
    )
}

export default UpperStats
