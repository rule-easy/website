import React from 'react';
import { v4 as uuid } from 'uuid';

import { Item } from '@/types/item';
import { Operator, Rule } from '@/types/rules';

import Autocomplete from './autocomplete';
import ModelDisplay from './modeldisplay';

interface Props {
    id: string
    initialSuggestion: Item[]
    ruleUpdatedCB: (ruleId: string, rule: Rule) => void;
    disabled: boolean
}

const RuleDataSetter = (props: Props) => {
    const [rule, setRule] = React.useState<Rule>({ order: 0, id: "", condition_data: "", action_data: "" })

    const supportedOperators: Item[] = [
        { "id": uuid(), name: "EQUALS_TO", displayName: "==" },
        { "id": uuid(), name: "GREATER_THAN_OR_EQUAL_TO", displayName: ">=" },
        { "id": uuid(), name: "LESSER_THAN_OR_EQUAL_TO", displayName: "<=" },
        { "id": uuid(), name: "STARTS_WITH", displayName: "=~" }
    ]
    const supportedLogicalOperators: Item[] = [
        { "id": uuid(), name: "AND", displayName: "&&" },
        { "id": uuid(), name: "OR", displayName: "||" }
    ]

    const conditionChanged = async (event: string) => {
        rule.condition_data = "IF: { " + event + " }"
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }
    const actionChanged = async (event: string) => {
        rule.action_data = event
        setRule(rule)
        props.ruleUpdatedCB(props.id, rule)
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-2'>
                IF <Autocomplete onChange={conditionChanged} initialSuggestion={props.initialSuggestion.concat(supportedOperators, supportedLogicalOperators)} placeholder="Press up/down arrow key to select fields" disabled={props.disabled}></Autocomplete>
                {/* IF <Autocomplete onChange={conditionChanged} initialSuggestion={props.initialSuggestion} placeholder="Press up/down arrow key to select fields"></Autocomplete> */}
            </div>
            <div className='pl-10 mb-6 h-20'>
                THEN
                <ModelDisplay onChange={actionChanged} disabled={props.disabled} placeholder='Please enter JSON response'></ModelDisplay>
            </div>
        </div>


    )
}

export default RuleDataSetter
