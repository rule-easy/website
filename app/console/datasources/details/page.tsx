'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const DataSourceDetails = () => {
    const searchParams = useSearchParams()
    const datasourceID = searchParams.get('id')

    return (
        <div>
            <p>DataSource details here {datasourceID}</p>
        </div>
    )
}

export default DataSourceDetails
