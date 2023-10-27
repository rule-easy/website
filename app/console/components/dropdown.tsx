import React from 'react';

const DropDown = (props: any) => {
    return (
        <div>
            <div className="form-control">
                <select className="select select-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled}>
                    <option disabled> {props.placeholder} </option>
                    {
                        props.options.map((element: string, index: number) => (
                            <option key={index}>{element}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default DropDown
