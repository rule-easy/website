import clsx from 'clsx';
import React from 'react';

const Label = (props: any) => {

    return (
        <div>
            <label className="label">
                <span className={clsx({ "text-sm label-text": true }, { "text-gray-100": !props.disabled }, { "text-gray-500": props.disabled })}>{props.label}</span>
            </label>
        </div>
    )
}

export default Label
