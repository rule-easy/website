import React from 'react';

import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RuleDataSetter = () => {
    const [conditionEnabled, setConditionEnabled] = React.useState(false);

    const enableCondition = async () => {
        setConditionEnabled(true)
    }

    return (
        <div>
            <div className='flex flex-row justify-around space-x-3 space-y-1'>
                <div className='flex flex-row items-center'>
                    <FontAwesomeIcon icon={faCircleMinus} className=" text-custom-red cursor-pointer hover:text-indigo-700" />
                </div>

                <input type="text" placeholder="Start typing (ex: amount)" className="grow input input-bordered input-primary w-full max-w-xs" />

                <select className="select select-primary w-full max-w-xs basis-2/12">
                    <option disabled selected> ==</option>
                    <option>==</option>
                    <option>&gt;=</option>
                    <option>&lt;=</option>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </select>

                <input type="text" placeholder="Ex: 200" className="basis-6/12 input input-bordered input-primary w-full max-w-xs" />
                {!conditionEnabled &&
                    <div className='flex flex-row items-center '>
                        <FontAwesomeIcon onClick={() => enableCondition()} icon={faCirclePlus} className=" text-custom-green cursor-pointer hover:text-indigo-700" />
                    </div>
                }

                {conditionEnabled &&
                    <select className="select select-primary w-full max-w-xs basis-2/12">
                        <option disabled selected> +</option>
                        <option>&&</option>
                        <option>||</option>
                    </select>
                }
            </div>
        </div>
    )
}

export default RuleDataSetter
