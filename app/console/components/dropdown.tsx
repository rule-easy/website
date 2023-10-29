import React from 'react';

interface DropDownItem {
    id: string
    name: string
}

const DropDown = (props: any) => {
    return (
        <div>
            <div className="form-control">
                <select className="select select-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled}>
                    <option disabled> {props.placeholder} </option>
                    {
                        props.options.map((element: DropDownItem, index: number) => (
                            <option key={element.id}>{element.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default DropDown
