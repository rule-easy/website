import { table } from 'console';
import React from 'react';

interface DropDownItem {
    id: string
    name: string
}

const CustomDropDown = (props: any) => {
    const onTrigger = async (event: any) => {
        // Call the parent callback function 
        console.log(event)
        console.log(props)
        console.log(event.target.value, event.target.key)
        props.parentCallback({ name: event.target.value, id: event.target.key });
        event.preventDefault();
    }


    return (
        <div>
            <div className="form-control">
                <select onChange={onTrigger} className="select select-sm px-2 p-0 select-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled}>
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

export default CustomDropDown