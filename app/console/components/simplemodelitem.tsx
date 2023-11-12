import React from 'react';

import { faAdd, faShuffle, faTrashCan, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SimpleModelItem = (props: any) => {
    return (
        <div>
            <div className='flex flex-row place-items-center w-fit bg-indigo-400 rounded-sm m-1 ml-10'>
                <FontAwesomeIcon className="mx-2 text-gray-900 hover:cursor-grab hover:text-indigo-100" icon={faUpDown} />
                <p className='mx-10 text-gray-900 font-sm font-mono'> {props.data} </p>
                <FontAwesomeIcon onClick={props.onAdd} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faAdd} />
                <FontAwesomeIcon onClick={() => props.onDelete(props.data)} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faTrashCan} />
            </div>
        </div>
    )
}

export default SimpleModelItem
