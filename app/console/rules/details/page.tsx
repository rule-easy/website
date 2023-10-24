'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

const RuleDetails = () => {
    const searchParams = useSearchParams()
    const ruleID = searchParams.get('id')

    return (
        <div>
            <p>Rule details here {ruleID}</p>
        </div>
    )
}

export default RuleDetails
