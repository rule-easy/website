import clsx from 'clsx';
import React, { useRef } from 'react';

import { faAdd, faAnglesDown, faAnglesUp, faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SimpleModelItem from '../app/console/components/simplemodelitem';

const ModelDisplay = (props: any) => {
    const [schema, setSchema] = React.useState<string>("{}")
    const [schemaJSON, setSchemaJSON] = React.useState<any>(JSON.parse("{}"))

    const onChange = async (e: any) => {
        setSchema(e.target.value)
        try {
            JSON.parse(e.target.value)
            setSchemaJSON(JSON.parse(e.target.value))
        } catch {
            console.log("Not a valid JSON yet")
            setSchemaJSON(e.target.value)
        }
        props.onChange(schema)
    }

    const beautify = async () => {
        console.log(schema)
        var beautifiedValue = JSON.stringify(JSON.parse(schema), null, '\t')
        setSchema(beautifiedValue)
        props.onChange(schema)
    }

    return (
        <div className='flex flex-col'>
            <div className=" bg-gray-900 min-w-full h-60 rounded-md outline outline-1 outline-gray-700 overflow-hidden">
                <div className='flex flex-row m-2 justify-end'>
                    <button title="Beautify" onClick={() => beautify()}
                        className={clsx({ "btn btn-sm justify-self-end rounded-none text-indigo-100 outline-none ": true })}>
                        Beautify <FontAwesomeIcon onClick={() => beautify()} icon={faFan} />
                    </button>
                </div>
                <div className='flex flex-row'>
                    <textarea onChange={onChange} className="textarea h-48 resize-none outline-none rounded-none text-xs font-mono bg-gray-900 min-w-full" placeholder='{ "amount": 100, "status": "COMPLETED", "userID": "dsad-saas-dssa-dassa"}' disabled={props.disabled} value={schema}></textarea>
                </div>
            </div>
        </div >
    )
}

export default ModelDisplay
