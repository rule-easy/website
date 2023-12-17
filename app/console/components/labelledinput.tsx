import clsx from 'clsx';
import React from 'react';

import Label from './label';

const LabelledInput = (props: any) => {

    const onTrigger = async (event: any) => {
        // Call the parent callback function 
        props.parentCallback(event.target.value);
        event.preventDefault();
    }

    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                <Label label={props.top_label} disabled={props.disabled} />
                <label className="input-group">
                    <span className='text-sm bg-custom-primary'>{props.label}</span>
                    <input onChange={onTrigger} type="text" placeholder={props.placeholder} className="input input-sm input-bordered bg-gray-900 disabled:bg-gray-600 disabled:border-gray-600" disabled={props.disabled} />
                </label>
            </div>
        </div>
    )
}

export default LabelledInput
