import clsx from 'clsx';
import React from 'react';

const ProgressSteps = (props: any) => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col'>
                <ul className="steps align-center mb-2 sm:visible">
                    {
                        props.steps.map((element: string, index: number) => (
                            <li key={index} className={clsx({ "step": true }, { "step-primary": props.progress >= index + 1 })}>
                                <span className='invisible sm:visible'>{element}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressSteps