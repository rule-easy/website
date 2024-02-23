'use client'

import { Rule } from 'postcss';

import RuleDataSetter from '@/components/ruleselector';

export default function Documentation() {
    const updateRule = async (ruleId: string, rule: Rule) => {
        console.log("Rule changed", ruleId, rule)
    }

    return (
        <div className='flex flex-col mt-40 pl-8 p-4 border-dashed border rounded-sm border-gray-500'>
            < div className='flex grow'>
                <RuleDataSetter ruleUpdatedCB={updateRule} initialSuggestion={[{ id: "1", name: "hello", displayName: "hello" }, { id: "2", name: "&&", displayName: "&&" }, { id: "3", name: "hi", displayName: "hi" }, { id: "4", name: ">=", displayName: ">=" }]}></RuleDataSetter>
            </div>
        </div >
    )
}
