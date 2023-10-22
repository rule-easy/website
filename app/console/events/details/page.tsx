'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

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
