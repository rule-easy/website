
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ licon = {}, text, ricon = {}, href = "", disabled = false, onClick = {} }) => {
    return (
        <div>
            <button onClick={() => onClick} type="submit"
                className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-800 disabled:cursor-not-allowed" disabled={disabled}>
                {licon &&
                    <FontAwesomeIcon icon={licon} className="pr-4 text-indigo-100 disabled:cursor-not-allowed" />
                }
                {!href &&
                    <p className={clsx({ "pointer-events: none": disabled })}> {text} </p>
                }
                {href &&
                    <Link href={href} className={clsx({ "pointer-events: none": disabled })}> {text} </Link>
                }
                <FontAwesomeIcon icon={ricon} className="pl-4 text-indigo-100 disabled:cursor-not-allowed" />
            </button>
        </div>
    )
}

export default Button
