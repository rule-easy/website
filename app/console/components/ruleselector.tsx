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
        <div className='flex grow flex-row justify-around'>
            <div className="basis-6/12">
                <Autocomplete initialSuggestion={props.initialSuggestion} placeholder="Start typing ex: amount"></Autocomplete>
            </div>
            <div className="basis-1/12">
                <Autocomplete initialSuggestion={[{ "id": 1, name: "==" }]} placeholder="=="></Autocomplete>
            </div>
            <div className="basis-4/12">
                <input onChange={operand2Changed} type="text" placeholder="Ex: 200" className="basis-4/12 input input-xs input-bordered w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled} />
            </div>
            <div className="basis-1/12">
                <Autocomplete initialSuggestion={[{ "id": 1, name: "&&" }, { "id": 2, name: "||" }]} placeholder="&&"></Autocomplete>
            </div>

        </div>
    )
}

export default RuleDataSetter
