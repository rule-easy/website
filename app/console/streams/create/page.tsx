'use client'
import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

import Button from '@/components/button';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import { CreateStreamRequest } from '@/types/stream';
import {
    faArrowLeft, faArrowRight, faDatabase, faFlagCheckered
} from '@fortawesome/free-solid-svg-icons';

import LabelledInput from '../../components/labelledinput';
import ProgressSteps from '../../components/progresssteps';

const CreateStream = () => {
    const [progress, setProgress] = React.useState(0);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [name, setName] = React.useState("")
    const [ipModelMode, setIpModelMode] = React.useState(1)

    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const schema = useRef("")

    const checkName = async () => {
        // Check for empty name
        if (name.length == 0) {
            setErrorMsg("Stream name cannot be empty")
            return
        }
        // Check for duplicate name
        axiosAuth.get("/v1/stream?name=" + name).then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                setErrorMsg("Stream with this name already exists")
            } else {
                setErrorMsg("")
                setProgress(progress + 1)
            }
        }).catch((err: AxiosError) => {
            setErrorMsg("Error")
        })
    }

    const validateSchema = () => {
        try {
            JSON.parse(schema.current)
            setErrorMsg("")
            setProgress(progress + 1)
        } catch (e) {
            setErrorMsg("Please enter valid JSON")
        }
    };

    const createStreamAPI = async () => {
        const createStreamReq: CreateStreamRequest = { name: name, schema: schema.current }
        var resp: any
        axiosAuth.put("/v1/stream", createStreamReq).then((resp) => {
            router.push("/console/streams/create/success")
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
        })
    }

    const nextStep = async () => {
        let curStep = progress
        if (curStep == 1) {
            checkName()
        } else if (curStep == 2) {
            validateSchema()
        } else if (curStep == 3) {
            createStreamAPI()
        }
    }

    const prevStep = async () => {
        setErrorMsg("")
        setProgress(progress - 1)
    }
    const onStreamNameChange = async (streamName: string) => {
        setName(streamName)
    }

    const ipModelModeChanged = async (state: number) => {
        setIpModelMode(state)
    }

    return (
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col bg-custom-gray mx-2 p-2 rounded-xl'>
            {progress == 0 &&
                <div className='flex flex-col p-2'>
                    <p>
                        On PatternAct, streams signify the incoming flow of homogeneous events from client side. Each event in a stream shares a common schema that needs to be registered before sending data.
                    </p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <Button onClick={() => setProgress(1)} licon={faDatabase} text={"Create new stream"} ricon={faArrowRight} />
                    </div>
                </div>
            }

            {/* Progress bar */}
            {progress > 0 &&
                <ProgressSteps progress={progress} steps={['Choose a name', 'Register schema', 'Review']} />
            }

            {!!errorMsg && (
                <p className="bg-red-100 text-red-600 text-center font-semibold p-2">
                    {errorMsg}
                </p>
            )}

            {/* Step-1 form */}
            {
                progress >= 1 &&
                <LabelledInput parentCallback={onStreamNameChange} placeholder="Ex:add-cash-events" label="Stream name" top_label="Choose a unique stream name" disabled={progress > 1} />
            }

            {/* Step-2 form */}
            {
                progress >= 2 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-10">
                    <label className="label">
                        <span className="label-text">Input model</span>
                    </label>
                    <div className='flex flex-row'>
                        <div className="join mb-2">
                            <button onClick={() => ipModelModeChanged(1)}
                                className={clsx({ "btn btn-sm rounded-none text-indigo-100 outline-none": true }, { "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2": ipModelMode == 1 })}>
                                JSON
                            </button>
                            <button onClick={() => ipModelModeChanged(2)}
                                className={clsx({ "btn btn-sm rounded-none text-indigo-100 outline-none": true }, { "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2": ipModelMode == 2 })}>
                                SIMPLE
                            </button>
                            <Button>

                            </Button>
                        </div>
                    </div>
                    <textarea onChange={(e) => (schema.current = e.target.value)} className="textarea textarea-bordered h-24" placeholder='{ "amount": 100, "status": "COMPLETED", "userID": "dsad-saas-dssa-dassa"}' disabled={progress > 2}></textarea>
                </div>
            }

            {/* Navigation buttons */}
            <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-12": true }, { "justify-end": progress == 1 }, { "justify-between": progress >= 2 })}>
                {progress >= 2 &&
                    <Button onClick={prevStep} licon={faArrowLeft} text={"Back"} />
                }
                {progress >= 1 && progress <= 3 &&
                    <Button onClick={nextStep} ricon={progress <= 2 ? faArrowRight : faFlagCheckered} text={progress <= 2 ? "Next" : "Finish"} />
                }
            </div>
        </div >
    )
}

export default CreateStream
