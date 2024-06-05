import React from 'react';

interface Props {
    id: string
    method: string
    uri: string
    title: string
    description: string
    reqBody?: string
    respBody?: string
}

const APIDocumentation = (props: Props) => {
    return (
        <div>
            <section id={props.id} className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-indigo-400">{props.method.toUpperCase()} {props.uri}</h2>
                <p className='font-bold'>{props.title} </p>
                <p>{props.description}</p>
                {
                    props.method != "GET" &&
                    <div>
                        <h3 className="text-lg font-bold mt-4">Request body</h3>
                        <div className="whitespace-pre bg-gray-200 p-4 rounded-lg overflow-auto">
                            <pre>
                                <code className='text-gray-800 overflow-scroll'>{props.reqBody}</code>
                            </pre>
                        </div>
                    </div>
                }
                <h3 className="text-lg font-bold mt-4">Response</h3>
                <div className="whitespace-pre bg-gray-200 p-4 rounded-lg overflow-auto">
                    <pre>
                        <code className='text-gray-800'>
                            {
                                props.respBody
                            }
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default APIDocumentation
