'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

const EventDetails = () => {
    const searchParams = useSearchParams()
    const eventID = searchParams.get('id')

    return (
        <div>
            Event details
        </div>
    )
}

export default EventDetails
