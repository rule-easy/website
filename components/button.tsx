
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Button = (props: any) => {
    return (
        <div>
            <button onClick={props.onClick} type="submit"
                className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-800 disabled:cursor-not-allowed" disabled={props.disabled}>
                {props.licon &&
                    <FontAwesomeIcon icon={props.licon} className="pr-4 text-indigo-100 disabled:cursor-not-allowed" />
                }
                {!props.href &&
                    <p className={clsx({ "pointer-events: none": props.disabled })}> {props.text} </p>
                }
                {props.href &&
                    <Link href={props.href} className={clsx({ "pointer-events: none": props.disabled })}> {props.text} </Link>
                }
                {props.ricon &&
                    <FontAwesomeIcon icon={props.ricon} className="pl-4 text-indigo-100 disabled:cursor-not-allowed" />
                }
            </button>
        </div>
    )
}

export default Button
