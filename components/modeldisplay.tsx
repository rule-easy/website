import clsx from 'clsx';
import React, { useRef } from 'react';

import { faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    placeholder: string
    onChange: (event: string) => void
    disabled: boolean
}

const ModelDisplay = (props: Props) => {
    const [schema, setSchema] = React.useState<string>("")
    const [schemaJSON, setSchemaJSON] = React.useState<any>(JSON.parse("{}"))
    const [validJSON, setValidJSON] = React.useState<boolean>(false)


    const onChange = async (e: any) => {
        if (e.target.value == "") {
            setSchema(e.target.value)
            props.onChange(e.target.value)
            return
        }
        setSchema(e.target.value)
        try {
            JSON.parse(e.target.value)
            setSchemaJSON(JSON.parse(e.target.value))
            setValidJSON(true)
        } catch {
            console.log("Not a valid JSON yet")
            setSchemaJSON(e.target.value)
            setValidJSON(false)
        }
        props.onChange(e.target.value)
    }

    const beautify = async () => {
        console.log(schema)
        var beautifiedValue = JSON.stringify(JSON.parse(schema), null, '   ')
        setSchema(beautifiedValue)
        props.onChange(schema)
    }

    return (
        <div className={clsx({ "bg-gray-900 p-0 m-0 min-w-full min-h-full rounded-t-md outline outline-1 outline-gray-700 overflow-hidden": true })}>
            <div className='flex flex-row m-1 justify-end'>
                <p className={clsx({ "font-mono font-semibold text-xs mr-3 pointer-events: none": true }, { "text-green-400": validJSON }, { "text-red-400": !validJSON })}> {"{ VALID JSON }"} </p>
                <FontAwesomeIcon onClick={() => beautify()} icon={faFan} className="cursor-pointer outline-none justify-self-end hover:text-indigo-500" />
            </div>
            <textarea onChange={onChange} className="textarea m-0 p-0 border-0 min-w-full min-h-full resize-none outline-none rounded-none text-xs font-mono bg-gray-800" placeholder={props.placeholder} disabled={props.disabled} value={schema}></textarea>
        </div>
    )
}

export default ModelDisplay
