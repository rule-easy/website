import React from 'react';

import { faAdd, faShuffle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SimpleModelItem from './simplemodelitem';

const SimpleModelDisplay = (props: any) => {
    const [schemaData, setSchema] = React.useState<JSON>(JSON.parse(props.data))

    return (
        <div className='flex flex-col'>
            {
                Object.keys(schemaData).map((item, i) => (
                    <SimpleModelItem data={item} />
                ))
            }
        </div>
    )
}

export default SimpleModelDisplay
