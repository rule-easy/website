import clsx from 'clsx';
import React, { useRef } from 'react';

import { faAdd, faAnglesDown, faAnglesUp, faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SimpleModelItem from './simplemodelitem';

const ModelDisplay = (props: any) => {
    const [ipModelMode, setIpModelMode] = React.useState(1)
    const [schema, setSchema] = React.useState<string>("{}")
    const [schemaJSON, setSchemaJSON] = React.useState<any>(JSON.parse("{}"))

    const ipModelModeChanged = async (state: number) => {
        setIpModelMode(state)
    }

    const onChange = async (e: any) => {
        setSchema(e.target.value)
        setSchemaJSON(JSON.parse(e.target.value))
        props.onChange(schema)
    }

    const beautify = async () => {
        console.log(schema)
        var beautifiedValue = JSON.stringify(JSON.parse(schema), null, '\t')
        setSchema(beautifiedValue)
        props.onChange(schema)
    }

    const removeKey = async (key: string) => {
        console.log(key)
        var updatedSchemaData: any = schemaJSON
        delete updatedSchemaData[key]
        setSchema(JSON.stringify(updatedSchemaData, null, '\t'))
        setSchemaJSON(updatedSchemaData)
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row mb-2'>
                <div className='basis-6/12'>
                    <button onClick={() => ipModelModeChanged(1)}
                        className={clsx({ "btn btn-sm rounded-none font-bold text-indigo-100 outline-none active:outline-none focus:outline-none border-0 active:border-0 focus:border-0": true }, { " text-indigo-500": ipModelMode == 1 })}>
                        JSON
                    </button>
                    <button onClick={() => ipModelModeChanged(2)}
                        className={clsx({ "btn btn-sm rounded-none font-bold text-indigo-100 outline-none active:outline-none": true }, { " text-indigo-500": ipModelMode == 2 })}>
                        SIMPLE
                    </button>
                </div>
            </div>
            {
                ipModelMode == 1 &&
                <div className=" bg-gray-900 min-w-full h-60 rounded-md outline outline-1 outline-gray-700 overflow-hidden">
                    <div className='flex flex-row m-2 justify-end'>
                        <button title="Beautify" onClick={() => beautify()}
                            className={clsx({ "btn btn-sm justify-self-end rounded-none text-indigo-100 outline-none ": true })}>
                            Beautify <FontAwesomeIcon onClick={() => beautify()} icon={faFan} />
                        </button>
                    </div>
                    <div className='flex flex-row'>
                        <textarea onChange={onChange} className="textarea outline-none rounded-none text-xs h-48 font-mono bg-gray-900 min-w-full" placeholder='{ "amount": 100, "status": "COMPLETED", "userID": "dsad-saas-dssa-dassa"}' disabled={props.disabled} value={schema}></textarea>
                    </div>
                </div>
            }
            {
                ipModelMode == 2 &&
                <div className=" bg-gray-900 min-w-full h-60 rounded-md outline outline-1 outline-gray-700 overflow-hidden">
                    <div className='flex flex-row m-2 justify-end'>
                        <button title="Add root" onClick={() => beautify()}
                            className={clsx({ "btn btn-sm justify-self-end rounded-none text-indigo-100 outline-none ": true })}>
                            Add root <FontAwesomeIcon onClick={() => beautify()} icon={faAdd} />
                        </button>
                        <button title="Expand" onClick={() => beautify()}
                            className={clsx({ "btn btn-sm justify-self-end rounded-none text-indigo-100 outline-none ": true })}>
                            Expand <FontAwesomeIcon onClick={() => beautify()} icon={faAnglesUp} />
                        </button>
                        <button title="Collapse" onClick={() => beautify()}
                            className={clsx({ "btn btn-sm justify-self-end rounded-none text-indigo-100 outline-none ": true })}>
                            Collapse <FontAwesomeIcon onClick={() => beautify()} icon={faAnglesDown} />
                        </button>
                    </div>
                    <div className='flex flex-col h-48 overflow-auto'>
                        {
                            <SimpleModelItem onDelete={removeKey} parent={schemaJSON} expand_child={false} />
                        }
                    </div>
                </div>
            }
        </div >
    )
}

export default ModelDisplay
