import React from 'react';

import { Operator, Rule } from '@/types/rules';

import Autocomplete from './autocomplete';

const RuleDataSetter = (props: any) => {
    const [rule, setRule] = React.useState<Rule>({ id: "", condition_data: "", action_data: "" })

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

    const conditionChanged = async (event: any) => {
        rule.condition_data = event
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    const actionChanged = async (event: any) => {
        rule.action_data = event
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-2'>
                IF <Autocomplete initialSuggestion={props.initialSuggestion} placeholder="Press up/down arrow key to select fields" onSuggestionSelect={conditionChanged}></Autocomplete>
            </div>
            <div className='pl-10'>
                THEN <Autocomplete initialSuggestion={props.initialSuggestion} placeholder="Start typing ex: amount" onSuggestionSelect={actionChanged}></Autocomplete>
            </div>
        </div>


    )
}

export default RuleDataSetter
