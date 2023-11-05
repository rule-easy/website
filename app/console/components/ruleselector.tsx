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

    const operand1Changed = async (value: any) => {
        setOperand1(value)
        props.parentCallback(props.id, value + " " + operator + " " + operand2 + " " + condition);
    }
    const operatorChanged = async (value: any) => {
        setOperator(value)
        props.parentCallback(props.id, operand1 + " " + value + " " + operand2 + " " + condition);
    }
    const operand2Changed = async (value: any) => {
        setOperand2(value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + value + " " + condition);
    }
    const conditionChanged = async (value: any) => {
        setCondition(value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + operand2 + " " + value);
    }
    return (
        <div className='flex grow flex-row mx-2'>
            <div className="basis-4/12">
                <Autocomplete initialSuggestion={props.initialSuggestion} onSuggestionSelect={operand1Changed} onChange={operand1Changed} placeholder="Start typing ex: amount"></Autocomplete>
            </div>
            <div className="basis-1/12">
                <Autocomplete onSuggestionSelect={operatorChanged} onChange={operatorChanged} initialSuggestion={[{ "id": "1", name: "==" }, { "id": "2", name: ">=" }, { "id": "3", name: "<=" }, { "id": "4", name: "&&" }, { "id": "5", name: "||" }]} placeholder="=="></Autocomplete>
            </div>
            <div className="basis-6/12 flex flex-col">
                <input onChange={(e) => operand2Changed(e.target.value)} type="text" placeholder="Ex: 200" className="input input-xs input-bordered rounded-none font-mono w-full p-0 m-0 text-center disabled:bg-gray-800" disabled={props.disabled} />
            </div>
            <div className="basis-1/12">
                <Autocomplete onSuggestionSelect={conditionChanged} onChange={conditionChanged} initialSuggestion={[{ "id": "1", name: "&&" }, { "id": "2", name: "||" }]} placeholder="&&"></Autocomplete>
            </div>

        </div>
    )
}

export default RuleDataSetter
