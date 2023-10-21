'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const EventDetails = () => {
    const searchParams = useSearchParams()
    const eventID = searchParams.get('id')

    return (
        <div>
            <p>Event details here {eventID}</p>
        </div>
    )
}

export default EventDetails
