'use client'
import { AxiosError } from 'axios';
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
    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const schema = useRef("")
    let finalStreamName = ""

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
        const createStreamReq: CreateStreamRequest = { name: finalStreamName, schema: schema.current }
        var resp: any
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
    const onStreamNameChange = async (streamName: string) => {
        finalStreamName = streamName
    }
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col bg-custom-gray mr-2 p-2 rounded-xl'>
            {progress == 0 &&
                <div className='flex flex-col p-2'>
                    <p>
                        On PatternAct, streams signify the incoming flow of homogeneous events from client side. Each event in a stream shares a common schema that needs to be registered before sending data.
                    </p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <Button onClick={nextStep} licon={faDatabase} text={"Create new stream"} ricon={faArrowRight} />
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
                <div data-aos="fade-up" data-aos-delay="200" className="form-control">
                    <label className="label">
                        <span className="label-text">Enter a valid JSON sample data</span>
                    </label>
                    <textarea onChange={(e) => (schema.current = e.target.value)} className="textarea textarea-bordered h-24" placeholder='{ amount: 100, status: "COMPLETED", userID: "dsad-saas-dssa-dassa"}' disabled={progress > 2}></textarea>
                </div>
            }

            {/* Navigation buttons */}
            <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-12": true }, { "justify-end": progress == 1 }, { "justify-between": progress >= 2 })}>
                {progress >= 2 &&
                    <Button onClick={prevStep} licon={faArrowLeft} text={"Back"} />
                }
                {progress >= 1 && progress <= 2 &&
                    <Button onClick={nextStep} ricon={faArrowRight} text={"Next"} />
                }
                {progress >= 3 &&
                    <Button onClick={createStream} ricon={faFlagCheckered} text={"Finish"} />
                }
            </div>
        </div >
    )
}

export default CreateStream
