import React from 'react';

const LabelledInput = (props: any) => {

    const onTrigger = async (event: any) => {
        // Call the parent callback function 
        props.parentCallback(event.target.value);
        event.preventDefault();
    }

    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="200" className="form-control pl-8">
                <label className="label">
                    <span className="label-text">{props.top_label}</span>
                </label>
                <label className="input-group">
                    <span>{props.label}</span>
                    <input onChange={onTrigger} type="text" placeholder={props.placeholder} className="input input-bordered disabled:bg-gray-800" disabled={props.disabled} />
                </label>
            </div>
        </div>
    )
}

export default LabelledInput
