'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const StreamDetails = () => {
    const searchParams = useSearchParams()
    const streamID = searchParams.get('id')

    return (
        <div>
            <p>Stream details here {streamID}</p>
        </div>
    )
}

export default StreamDetails
