import clsx from 'clsx';
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

const LabeledInput = (props: Props) => {
    const onChange = async (event: any) => {
        // Call the parent callback function 
        props.onChange(event.target.value);
        event.preventDefault();
    }

    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                {
                    props.top_label &&
                    <CustLabel label={props.top_label} disabled={props.disabled} />
                }
                <label className="input-group">
                    <span className='truncate text-xs bg-custom-primary sm:text-sm '>{props.label}</span>
                    <input onChange={onChange} value={props.value} type={props.type} placeholder={props.placeholder} className="input input-sm input-bordered bg-gray-900 disabled:bg-gray-600 disabled:border-gray-600 focus:outline-none" disabled={props.disabled} />
                </label>
            </div>
        </div>
    )
}

export default LabeledInput
