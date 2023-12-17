import React from 'react';

import { Operator, Rule } from '@/types/rules';

import Autocomplete from './autocomplete';

const RuleDataSetter = (props: any) => {
    const [rule, setRule] = React.useState<Rule>({ id: props.id, order: props.order, operand1: "", operand2: "", operator: { id: "", name: "", displayName: "" }, condition: { id: "", name: "", displayName: "" } })

    const supportedOperators: Operator[] = [
        { "id": "1", name: "==", displayName: "EQUALS_TO" },
        { "id": "2", name: ">=", displayName: "GREATER_THAN_OR_EQUAL_TO" },
        { "id": "3", name: "<=", displayName: "LESSER_THAN_OR_EQUAL_TO" },
        { "id": "4", name: "~=", displayName: "STARTS_WITH" }
    ]
    const supportedLogicalOperators: Operator[] = [
        { "id": "1", name: "&&", displayName: "AND" },
        { "id": "2", name: "||", displayName: "OR" }
    ]

    const operand1Changed = async (value: any) => {
        rule.operand1 = value.displayName
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    const operatorChanged = async (value: Operator) => {
        rule.operator = value
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    const operand2Changed = async (value: string) => {
        rule.operand2 = value
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    const conditionChanged = async (value: Operator) => {
        rule.condition = value
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    return (
        <div className='flex grow flex-row mx-2'>
            <div className="basis-4/12">
                <Autocomplete onSuggestionSelect={operand1Changed} onChange={operand1Changed} initialSuggestion={props.initialSuggestion} placeholder="Start typing ex: amount"></Autocomplete>
            </div>
            <div className="basis-4/12">
                <Autocomplete onSuggestionSelect={operatorChanged} onChange={operatorChanged} initialSuggestion={supportedOperators} placeholder="=="></Autocomplete>
            </div>
            <div className="basis-3/12 flex flex-col">
                <input onChange={(e) => operand2Changed(e.target.value)} type="text" placeholder="Ex: 200" className="input input-xs input-bordered rounded-none font-mono w-full p-0 m-0 text-center disabled:bg-gray-800" disabled={props.disabled} />
            </div>
            <div className="basis-1/12">
                <Autocomplete onSuggestionSelect={conditionChanged} onChange={conditionChanged} initialSuggestion={supportedLogicalOperators} placeholder="&&"></Autocomplete>
            </div>

        </div>
    )
}

export default RuleDataSetter
