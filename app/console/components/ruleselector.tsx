import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Autocomplete from './autocomplete';

const RuleDataSetter = (props: any) => {
    const [conditionEnabled, setConditionEnabled] = React.useState(false);
    const [operand1, setOperand1] = React.useState("")
    const [operand2, setOperand2] = React.useState("")
    const [operator, setOperator] = React.useState("")
    const [condition, setCondition] = React.useState("")

    const enableCondition = async () => {
        setConditionEnabled(true)
    }

    const operand1Changed = async (event: any) => {
        setOperand1(event.target.value)
        props.parentCallback(props.id, event.target.value + " " + operator + " " + operand2 + " " + condition);
    }
    const operatorChanged = async (event: any) => {
        setOperator(event.target.value)
        props.parentCallback(props.id, operand1 + " " + event.target.value + " " + operand2 + " " + condition);
    }
    const operand2Changed = async (event: any) => {
        setOperand2(event.target.value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + event.target.value + " " + condition);
    }
    const conditionChanged = async (event: any) => {
        setCondition(event.target.value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + operand2 + " " + event.target.value);
    }
    return (
        <div>
            <div className='flex flex-row space-x-3 space-y-1'>

                <Autocomplete></Autocomplete>
                {/* <input onChange={operand1Changed} type="text" placeholder="Start typing (ex: amount)" className="grow input input-bordered input-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled} /> */}

                <select onChange={operatorChanged} className="select select-primary w-full max-w-xs basis-2/12 disabled:bg-gray-800" defaultValue="  " disabled={props.disabled}>
                    <option></option>
                    <option>==</option>
                    <option>&gt;=</option>
                    <option>&lt;=</option>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </select>

                <input onChange={operand2Changed} type="text" placeholder="Ex: 200" className="basis-4/12 input input-bordered input-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled} />

                <select onChange={conditionChanged} className="select select-primary w-full max-w-xs basis-2/12 disabled:bg-gray-800" defaultValue="  " disabled={props.disabled}>
                    <option></option>
                    <option>&&</option>
                    <option>||</option>
                </select>

            </div>
        </div>
    )
}

export default RuleDataSetter
