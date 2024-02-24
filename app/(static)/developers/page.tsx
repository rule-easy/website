'use client'

import ModelDisplay from '@/components/modeldisplay';
import RuleDataSetter from '@/components/ruleselector';
import { Rule } from '@/types/rules';

export default function Documentation() {

    const updateRule = async (ruleId: string, rule: Rule) => {
        console.log("Rule changed", ruleId, rule)
    }

    return (
        <div className='flex flex-col mt-40 pl-8 p-4 border-dashed border rounded-sm border-gray-500'>
            < div className='flex flex-col'>
                <RuleDataSetter id="abc" disabled={false} ruleUpdatedCB={updateRule} initialSuggestion={[{ id: "1", name: "hello", displayName: "hello" }, { id: "3", name: "hi", displayName: "hi" }]}></RuleDataSetter>
                <div className="flex flex-row w-full lg:flex-row lg:justify-between">
                    <ModelDisplay />
                </div>
            </div>
        </div >
    )
}
