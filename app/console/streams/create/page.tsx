'use client'
import { AxiosError } from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import { CreateStreamRequest } from '@/types/stream';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateStream = () => {
    const [progress, setProgress] = React.useState(0);
    const [createStreamSuccess, setCreateStreamSuccess] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const streamName = useRef("")
    const schema = useRef("")

    const startForm = async () => {
        console.log("Starting a new form")
    };
    const checkName = async () => {
        console.log("Validating name")
        // TODO: Validate name
    }
    const validateSchema = async () => {
        console.log("Validating schema")
        // TODO: Validate JSON schema
    };
    const createStream = async () => {
        console.log("Creating stream")
        const createStreamReq: CreateStreamRequest = { name: streamName.current, schema: schema.current }
        var resp: ServerResponse
        // Make an API calls
        axiosAuth.put("/v1/stream", createStreamReq).then((resp) => {
            console.log(resp)
            setCreateStreamSuccess(true)
            router.push("/console/streams/create/success")
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
        })
        setProgress(4)
    }
    const nextStep = async () => {
        if (progress == 0) {
            startForm()
        } else if (progress == 1) {
            checkName()
        } else if (progress == 2) {
            validateSchema()
        } else {
            CreateStream()
        }
        setProgress(progress + 1)
        console.log("Pressed next step")
    }
    const prevStep = async () => {
        console.log("Pressed prev step")
        setErrorMsg("")
        setProgress(progress - 1)
    }
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col bg-custom-gray mr-2 p-2 rounded-xl'>
            {progress == 0 &&
                <div className='flex flex-col p-2'>
                    <p>
                        On PatternAct, streams signify the incoming flow of homogeneous events from client side. Each event in a stream shares a common schema that needs to be registered before sending data.
                    </p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <button onClick={() => nextStep()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create new stream <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                    </div>
                </div>
            }

            {/* Progress bar */}
            {progress > 0 &&
                <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col'>
                    <ul className="steps align-center mb-6">
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 1 })}>Choose a name</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 2 })}>Register schema</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 3 })}>Review</li>
                    </ul>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>
                </div>
            }

            {!!errorMsg && (
                <p className="bg-red-100 text-red-600 text-center font-semibold p-2">
                    {errorMsg}
                </p>
            )}

            {/* Step-1 form */}
            {
                progress >= 1 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                    <label className="label">
                        <span className="label-text">Choose a unique stream name</span>
                    </label>
                    <label className="input-group">
                        <span>Stream name</span>
                        <input onChange={(e) => (streamName.current = e.target.value)} type="text" placeholder="Ex:add-cash-events" className="input input-bordered" disabled={progress > 1} />
                    </label>
                </div>
            }

            {/* Step-2 form */}
            {
                progress >= 2 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                    <label className="label">
                        <span className="label-text">Enter a valid JSON sample data</span>
                    </label>
                    <textarea onChange={(e) => (schema.current = e.target.value)} className="textarea textarea-bordered h-24" placeholder='{ amount: 100, status: "COMPLETED", userID: "dsad-saas-dssa-dassa"}' disabled={progress > 2}></textarea>
                </div>
            }

            {/* Navigation buttons */}
            <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-8": true }, { "justify-end": progress == 1 }, { "justify-between": progress >= 2 })}>
                {progress >= 2 &&
                    <div className="flex col-span-6">
                        <button onClick={() => prevStep()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <FontAwesomeIcon icon={faArrowLeft} className="pr-4 text-indigo-100" /> Back</button>
                    </div>
                }
                {progress >= 1 && progress <= 2 &&
                    <div className="flex col-span-6">
                        <button onClick={() => nextStep()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Next <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                    </div>
                }
                {progress >= 3 &&
                    <div className="flex col-span-6">
                        <button onClick={() => createStream()} type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Finish <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-indigo-100" /></button>
                    </div>
                }
            </div>
        </div >
    )
}

export default CreateStream
