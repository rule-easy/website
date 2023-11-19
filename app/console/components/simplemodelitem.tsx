import clsx from 'clsx';
import React from 'react';

import {
    faAdd, faAngleDown, faAnglesRight, faGreaterThan, faMinus, faShuffle, faTrashCan, faUpDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SimpleModelItem = (props: any) => {
    const [expandChild, SetExpandChild] = React.useState<boolean>(false)

    const onExpand = async () => {
        SetExpandChild(true)
        props.on_expand()
    }

    const onCollapse = async () => {
        SetExpandChild(false)
        props.on_collapse()
    }

    if (typeof props.data == 'object') {
        return (
            <div>
                {
                    Object.keys(props.data).map((item) => (
                        <div>
                            <SimpleModelItem on_expand={onExpand} on_collapse={onCollapse} is_child_object={typeof props.data[item] == 'object'} data={item} />
                            {
                                typeof props.data[item] == 'object' && expandChild &&
                                <div className='flex flex-row pl-10'>
                                    <SimpleModelItem is_child_object={typeof props.data[item] == 'object'} data={props.data[item]} />
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className={clsx({ "flex flex-row place-items-center mb-1 ml-5": true })} >
                {
                    props.is_child_object && !expandChild &&
                    <FontAwesomeIcon onClick={onExpand} className="mr-2 hover:cursor-pointer hover:text-indigo-500" icon={faGreaterThan} />
                }
                {
                    props.is_child_object && expandChild &&
                    <FontAwesomeIcon onClick={onCollapse} className="mr-2 hover:cursor-pointer hover:text-indigo-500" icon={faAngleDown} />
                }
                {
                    !props.is_child_object &&
                    <FontAwesomeIcon icon={faMinus} className='mr-2' />
                }
                < div className='flex flex-row place-items-center w-fit bg-indigo-400 rounded-sm' >
                    <FontAwesomeIcon className="mx-2 text-gray-900 hover:cursor-grab hover:text-indigo-100" icon={faUpDown} />
                    <p className='mx-10 text-gray-900 font-sm font-mono'> {props.data}</p>
                    <p className='mx-10 text-gray-900 font-sm font-mono'> {props.depth}</p>
                    <FontAwesomeIcon onClick={props.onAdd} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faAdd} />
                    <FontAwesomeIcon onClick={() => props.onDelete(props.data)} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faTrashCan} />
                </div >
            </div >

        )
    }

}

export default SimpleModelItem
