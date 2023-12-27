import React from 'react';

const RuleDisplay = (props: any) => {
    return (
        <div>
            <span className='font-mono text-sm'>
                <p>IF (</p>
                {
                    [...props.ruleMap.entries()].map(([ruleID, rule]) =>
                        <div className='flex flex-row justify-start pl-8' key={ruleID}>
                            <span>{rule.operand1}</span>
                            <span className='mx-4 underline underline-offset-4 text-indigo-500'> {rule.operator.displayName} </span>
                            <span>{rule.operand2}</span>
                            <span className='mx-4 underline underline-offset-4 text-indigo-500'> {rule.condition.displayName} </span>
                        </div>
                    )
                }
                <p>) THEN (</p>
                <p>)</p>
            </span>
        </div>
    )
}

export default RuleDisplay
