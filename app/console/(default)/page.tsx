import React from 'react';

import EventList from '@/app/console/components/eventlist';
import FixedTimeSelector from '@/app/console/components/fixedtimeselector';
import RuleChart from '@/app/console/components/rulechart';
import RuleList from '@/app/console/components/rulelist';
import UpperStats from '@/components/upper-stats';

const Dashboard = () => {
    return (
        <div>
            <section data-aos="fade-up" data-aos-delay="200">
                <div className='flex flex-col'>
                    {/* Time selector */}
                    <FixedTimeSelector></FixedTimeSelector>
                    {/* Upper stats */}
                    <UpperStats />
                    {/* Chart and rules */}
                    <div className='flex flex-row my-5 h-80'>
                        {/* Chart */}
                        <div className='basis-8/12 h-full rounded-xl overflow-x-auto bg-custom-gray mr-2'>
                            <RuleChart></RuleChart>
                        </div>
                        <div className='basis-4/12 h-full rounded-xl overflow-x-auto bg-custom-gray mr-2'>
                            {/* Rules table */}
                            <RuleList></RuleList>
                        </div>
                    </div>
                    {/* Events table */}
                    <EventList></EventList>
                </div>
            </section>

        </div >
    )
}

export default Dashboard
