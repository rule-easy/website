import React from 'react';

import CustLabel from './label';

interface Props {
    top_label: string
    disabled: boolean
    label: string
    type: string
    onChange: (value: string) => void
    value?: string
    placeholder?: string
}

const LabeledSelector = (props: Props) => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                {
                    props.top_label &&
                    <CustLabel label={props.top_label} disabled={props.disabled} />
                }
                <label className="input-group">
                    <span className='truncate text-xs bg-custom-primary sm:text-sm '>{props.label}</span>
                    <select className="select select-primary w-full max-w-xs">
                        <option disabled selected>What is the best TV show?</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>
                    {/* <input onChange={onChange} value={props.value} type={props.type} placeholder={props.placeholder} className="input input-sm input-bordered bg-gray-900 disabled:bg-gray-600 disabled:border-gray-600 focus:outline-none" disabled={props.disabled} /> */}
                </label>
            </div>
        </div>
    )
}

export default LabeledSelector
