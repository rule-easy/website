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
    }

    const onCollapse = async () => {
        SetExpandChild(false)
    }

    if (typeof props.parent == 'object') {
        return (
            <div>
                {
                    Object.keys(props.parent).map((item) => (
                        <div>
                            <SimpleModelItem parent={item} child={props.parent[item]} />
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>
                <div className={clsx({ "flex flex-row place-items-center mb-1 ml-5": true })} >
                    {
                        typeof props.child == "object" && !expandChild &&
                        <FontAwesomeIcon onClick={onExpand} className="mr-2 hover:cursor-pointer hover:text-indigo-500" icon={faGreaterThan} />
                    }
                    {
                        typeof props.child == "object" && expandChild &&
                        <FontAwesomeIcon onClick={onCollapse} className="mr-2 hover:cursor-pointer hover:text-indigo-500" icon={faAngleDown} />
                    }
                    {
                        typeof props.child != "object" &&
                        <FontAwesomeIcon icon={faMinus} className='mr-2' />
                    }
                    < div className='flex flex-row place-items-center w-fit bg-indigo-400 rounded-sm' >
                        <FontAwesomeIcon className="mx-2 text-gray-900 hover:cursor-grab hover:text-indigo-100" icon={faUpDown} />
                        <p className='mx-10 text-gray-900 font-sm font-mono'> {props.parent}</p>
                        <FontAwesomeIcon onClick={props.onAdd} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faAdd} />
                        <FontAwesomeIcon onClick={() => props.onDelete(props.parent)} className="mx-2 text-gray-900 hover:cursor-pointer hover:text-indigo-100" icon={faTrashCan} />
                    </div >

                </div >
                <div>
                    {
                        typeof props.child == 'object' && expandChild &&
                        <div className='flex flex-row pl-10'>
                            <SimpleModelItem parent={props.child} />
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default SimpleModelItem
