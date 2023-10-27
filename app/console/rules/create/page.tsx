'use client'
import { AxiosError } from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { text } from 'stream/consumers';

import Button from '@/components/button';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import { CreateStreamRequest } from '@/types/stream';
import {
    faArrowLeft, faArrowRight, faDatabase, faFlagCheckered, faPlus, faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RuleDataSetter from '../../components/ruleselector';

const CreateRule = () => {
    const [progress, setProgress] = React.useState(0);
    const [errorMsg, setErrorMsg] = React.useState("");
    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const streamName = useRef("")
    const schema = useRef("")
    const [finalRule, setFinalRule] = React.useState("");

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
    const createRule = async () => {
        console.log("Creating stream")
        const createStreamReq: CreateStreamRequest = { name: streamName.current, schema: schema.current }
        var resp: ServerResponse
        // Make an API calls
        axiosAuth.put("/v1/stream", createStreamReq).then((resp) => {
            console.log(resp)
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
            createRule()
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
                        On PatternAct, Rules are set of customer defined logic that needs to be evaluated against each event in a stream. PatternAct systematically evaluates these rules for every incoming event in a stream.
                    </p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <Button onClick={nextStep} licon={faShieldHalved} text={"Create new rule"} ricon={faArrowRight}></Button>
                    </div>
                </div>
            }

            {/* Progress bar */}
            {progress > 0 &&
                <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col'>
                    <ul className="steps align-center mb-6">
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 1 })}>Select stream</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 2 })}>Choose a name</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 3 })}>Configure rule</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 4 })}>Test</li>
                        <li className={clsx({ "step": true }, { "step-primary": progress >= 5 })}>Submit</li>
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

            {/* Step-1 - Choose a stream */}
            {
                progress >= 1 &&
                <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col w-full lg:flex-row lg:justify-around">
                    <div className="form-control">
                        <select className="select select-primary w-full max-w-xs disabled:bg-gray-800" disabled={progress > 1}>
                            <option disabled selected>----- Select stream ----- </option>
                            <option>add-cash</option>
                            <option>withdrawals</option>
                            <option>promotions</option>
                            <option>Walking Dead</option>
                        </select>
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <Button licon={faPlus} ricon={faDatabase} href={"/console/streams/create"} text={"Create stream"} disabled={progress > 1}></Button>
                    {/* <button type="submit" className="flex items-center justify-center border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-800 disabled:cursor-not-allowed" disabled={progress > 1}> <FontAwesomeIcon icon={faPlus} className="pr-4 text-indigo-100" /> <Link href="/console/streams/create">Create new stream</Link><FontAwesomeIcon icon={faDatabase} className="pl-4 text-indigo-100" /></button> */}
                </div>

            }

            {/* Step-2 - Select rule name */}
            {
                progress >= 2 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control pl-8">
                    <label className="label">
                        <span className="label-text">Choose a unique rule name</span>
                    </label>
                    <label className="input-group">
                        <span>Rule name</span>
                        <input onChange={(e) => (streamName.current = e.target.value)} type="text" placeholder="Ex:chip-dumping-rule" className="input input-bordered disabled:bg-gray-800" disabled={progress > 2} />
                    </label>
                </div>
            }

            {/* Step-3 - Configure rule */}
            {
                progress >= 3 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control pl-8">
                    <label className="label">
                        <span className="label-text">Configure rule</span>
                    </label>
                    <div className='flex flex-col'>
                        <RuleDataSetter></RuleDataSetter>
                    </div>
                </div>
            }

            {/* Navigation buttons */}
            <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-12": true }, { "justify-end": progress == 1 }, { "justify-between": progress >= 2 })}>
                {progress >= 2 &&
                    <Button onClick={prevStep} licon={faArrowLeft} text={"Back"}></Button>
                }
                {progress >= 1 && progress <= 2 &&
                    <Button onClick={nextStep} ricon={faArrowRight} text={"Next"}></Button>
                }
                {progress >= 3 &&
                    <Button onClick={nextStep} ricon={faFlagCheckered} text={"Finish"}></Button>
                }
            </div>
        </div >
    )
}

export default CreateRule