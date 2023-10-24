'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

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
