import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateRule = () => {
    return (
        <div>
            <div className='text-gray-300 bg-custom-gray mr-2 p-4 rounded-xl'>
                On PatternAct, Rules are set of customer defined logic that needs to be evaluated against each event in a stream. PatternAct systematically evaluates these rules for every incoming event in a stream.
                <div className="flex justify-end">
                    <button type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create new rule <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                </div>
            </div>
        </div>
    )
}

export default CreateRule
