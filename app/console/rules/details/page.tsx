'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

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
