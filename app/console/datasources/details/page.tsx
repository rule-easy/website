'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

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
