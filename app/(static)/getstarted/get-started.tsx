'use client'

import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import CustomButton from '@/components/button';
import CustLabel from '@/components/label';
import LabeledInput from '@/components/labelledinput';
import ModelDisplay from '@/components/modeldisplay';
import ProgressSteps from '@/components/progresssteps';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import { Rule } from '@/types/rules';
import { CreateStreamRequest } from '@/types/stream';
import {
    faArrowLeft, faArrowRight, faDatabase, faFlagCheckered
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetStarted = () => {
    const [progress, setProgress] = React.useState(1);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [name, setName] = React.useState("")
    const [ruleMap, setRuleMap] = React.useState<Map<string, Rule>>(new Map<string, Rule>())

    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth()
    const router = useRouter();
    const [schema, setSchema] = React.useState("")

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
            setErrorMsg("Session expired. Please login")
        })
    }

    const validateSchema = () => {
        try {
            JSON.parse(schema)
            setErrorMsg("")
            setProgress(progress + 1)
        } catch (e) {
            setErrorMsg("Please enter valid JSON")
        }
    };

    const createStreamAPI = async () => {
        const createStreamReq: CreateStreamRequest = { name: name, schema: schema }
        var resp: any
        axiosAuth.put("/v1/stream", createStreamReq).then((resp) => {
            router.push("/getstarted")
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
        })
    }

    const nextStep = async () => {
        let curStep = progress
        if (curStep == 1) {
            // TODO: Add validation
            setProgress(progress + 1)
        } else if (curStep == 2) {
            // checkName()
            // validateSchema()
            setProgress(progress + 1)
        } else if (curStep == 3) {

        } else if (curStep == 4) {
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

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 md:py-40 border-gray-800">
                <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col mx-2 p-2'>
                    {/* Progress bar */}
                    {progress > 0 &&
                        <ProgressSteps progress={progress} steps={['Generate key', 'Register schema', 'Create rule', 'Test rule']} />
                    }

                    {/* Space for error message */}
                    {!!errorMsg && (
                        <p className="bg-red-100 text-red-600 text-center font-semibold p-2">
                            {errorMsg}
                        </p>
                    )}

                    {/* Collapsable accordion */}
                    <div className="join join-vertical w-full">

                        {/* Step-1 : Enter API key */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="accordian-steps" checked={progress == 1} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-2"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 1 - </div> Generate API token</h4>
                            </div>
                            <div className="collapse-content">
                                <div className="flex flex-row w-full">
                                    <LabeledInput parentCallback={onStreamNameChange} value={session?.user.accessToken} label="API Token" top_label="" disabled={progress > 1} />
                                </div>
                            </div>
                        </div>

                        {/* Step-2 : Create stream */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="accordian-steps" checked={progress == 2} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 2 - </div> Register schema</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <LabeledInput parentCallback={onStreamNameChange} placeholder="Ex:add-cash-events" label="Stream name" top_label="Choose a unique stream name" disabled={progress > 2} />
                                    <label className="label">
                                        <span className="label-text">Input sample event for registering schema</span>
                                    </label>
                                    <ModelDisplay disabled={progress > 2} onChange={setSchema} />
                                </div>
                            </div>
                        </div>

                        {/* Step-3 : Create rule */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="accordian-steps" checked={progress == 3} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 3 - </div> Create rule</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <LabeledInput parentCallback={setName} label="Rule name" top_label="Choose a unique rule name" disabled={progress > 3} />
                                    <CustLabel label="Configure conditions" disabled={progress > 4} />
                                    <div className='flex flex-col pl-8 p-4 border-dashed border rounded-sm border-gray-500'>
                                        {
                                            [...ruleMap.entries()].map(([ruleID, rule]) =>
                                                <div className='flex flex-row justify-around' key={ruleID}>
                                                    <div className='flex flex-row items-center'>
                                                        <FontAwesomeIcon onClick={progress == 3 && rule.order > 1 ? () => removeRule(ruleID) : undefined} icon={faCircleMinus} className={clsx({ "text-custom-red cursor-pointer hover:text-indigo-700": progress == 3 && rule.order > 1 }, { "text-gray-600 cursor-not-allowed": progress > 3 || rule.order == 1 })} />
                                                    </div>
                                                    < div className='flex grow'>
                                                        <RuleDataSetter initialSuggestion={schemaKeys} id={ruleID} order={rule.order} ruleUpdatedCB={updateRule} disabled={progress >= 4}></RuleDataSetter>
                                                    </div>
                                                    <div className='flex flex-row items-center '>
                                                        <FontAwesomeIcon onClick={progress == 3 ? () => addNewRule() : undefined} icon={faCirclePlus} className={clsx({ "text-custom-green cursor-pointer hover:text-indigo-700": progress == 3 }, { "text-gray-600 cursor-not-allowed": progress > 3 })} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step-4 : Test rule */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="accordian-steps" checked={progress >= 4} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 4 - </div> Test rule</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <label className="label">
                                        <span className="label-text">Input test event</span>
                                    </label>
                                    <div className="flex flex-row w-full lg:flex-row lg:justify-between">
                                        <ModelDisplay onChange={setSchema} />
                                        <ModelDisplay onChange={setSchema} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Navigation buttons */}
                <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-12": true }, { "justify-end": progress == 0 }, { "justify-between": progress >= 1 })}>
                    {progress >= 1 &&
                        <CustomButton onClick={prevStep} licon={faArrowLeft} text={"Back"} />
                    }
                    {progress >= 1 && progress <= 3 &&
                        <CustomButton onClick={nextStep} ricon={progress <= 2 ? faArrowRight : faFlagCheckered} text={progress <= 2 ? "Next" : "Finish"} />
                    }
                </div>
            </div >
        </section >
    )
}

export default GetStarted
