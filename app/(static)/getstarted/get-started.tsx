'use client'

import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { v4 as uuid } from 'uuid';

import CustomButton from '@/components/button';
import CustLabel from '@/components/label';
import LabeledInput from '@/components/labelledinput';
import ModelDisplay from '@/components/modeldisplay';
import ProgressSteps from '@/components/progresssteps';
import RuleDataSetter from '@/components/ruleselector';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import { Item } from '@/types/item';
import { CreateRuleRequest, EvaluateRuleRequest, Rule } from '@/types/rules';
import { CreateStreamRequest, UpdateStreamRequest } from '@/types/stream';
import {
    faArrowLeft, faArrowRight, faCircleMinus, faCirclePlus, faEye
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetStarted = () => {
    const [progress, setProgress] = React.useState(1);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [showAPIKey, setShowAPIKey] = React.useState<boolean>(false)

    // Auth states
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    // Stream states
    const [schema, setSchema] = React.useState("")
    const [streamName, setStreamName] = React.useState<string>("")
    const [streamID, setStreamID] = React.useState<string>("")
    const [streamData, setStreamData] = React.useState<string>("")
    const [schemaKeys, setStreamSchemaKeys] = React.useState<Item[]>([])

    // Rule states
    const [ruleName, setRuleName] = React.useState<string>("")
    // string vs Rule(aka condition-action pair)
    const [ruleMap, setRuleMap] = React.useState<Map<string, Rule>>(new Map<string, Rule>())
    // Total rules
    const [totalRules, setTotalRules] = React.useState(1)

    // Test rule
    const [testData, setTestData] = React.useState<string>("")
    const [testResultData, setTestResultData] = React.useState<string[]>([])

    const onStreamNameChange = async (streamName: string) => {
        setStreamName(streamName)
    }

    const checkStreamName = async () => {
        // Check for empty name
        if (streamName.length == 0) {
            setErrorMsg("Stream name cannot be empty")
            return false
        }
        // Check for duplicate name
        return await axiosAuth.get("/v1/stream?name=" + streamName).then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                setErrorMsg("Stream with this name already exists")
                return false
            } else {
                return true
                setErrorMsg("")
            }
        }).catch((err: AxiosError) => {
            setErrorMsg("Session expired. Please login")
            return false
        })
    }

    const showHidePassword = () => {
        setShowAPIKey(!showAPIKey)
    }

    const validateStreamSchema = () => {
        try {
            JSON.parse(schema)
            setErrorMsg("")
            return true
        } catch (e) {
            setErrorMsg("Please enter valid JSON")
            return false
        }
    };

    const createStream = async () => {
        const createStreamReq: CreateStreamRequest = { name: streamName, schema: schema }
        var resp: any
        return await axiosAuth.put("/v1/stream", createStreamReq).then((resp) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                var schemaLoc: Item[] = []
                console.log(data)
                data.success.data[0].schema_keys.forEach((element: string) => {
                    schemaLoc.push({ id: uuid(), name: element, displayName: element })
                });
                console.log(schemaLoc)
                console.log(JSON.stringify(JSON.parse(data.success.data[0].schema), null, '\t'))
                setStreamData(JSON.stringify(JSON.parse(data.success.data[0].schema), null, '\t'))
                setStreamSchemaKeys(schemaLoc)
                setStreamID(data.success.data[0].id)
                setErrorMsg("")
                return true
            }
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
            return false
        })
    }

    const clearRules = async () => {
        setRuleMap(new Map<string, Rule>())
        setTotalRules(1)
    }

    const addNewRule = async () => {
        let ruleID = uuid()
        setRuleMap(new Map(ruleMap.set(ruleID, { id: ruleID, order: totalRules, condition_data: "", action_data: "" })))
        setTotalRules(totalRules + 1)
    }

    const removeRule = async (ruleId: string) => {
        ruleMap.delete(ruleId)
        setRuleMap(new Map(ruleMap))
    }

    const updateRule = async (ruleId: string, rule: Rule) => {
        setRuleMap(new Map(ruleMap.set(ruleId, rule)))
        console.log(ruleMap)
    }

    const onRuleNameChange = async (ruleName: string) => {
        setRuleName(ruleName)
    }

    const checkRuleName = async () => {
        if (ruleName.length == 0) {
            setErrorMsg("Rule name cannot be empty")
            return false
        }
        // Check for duplicate name
        return await axiosAuth.get("/v1/rule?name=" + ruleName).then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                setErrorMsg("Rule with this name already exists")
                return false
            } else {
                setErrorMsg("")
                return true
            }
        }).catch((err: AxiosError) => {
            setErrorMsg("Session expired. Please login")
        })
    }

    const createRule = async () => {
        const createRuleRequest: CreateRuleRequest = { name: ruleName, data: Array.from(ruleMap.values()) }
        var resp: any
        return await axiosAuth.put("/v1/rule", createRuleRequest).then((resp) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                let ruleID = data.success.data.id
                console.log("Rule creation success:", ruleID)
                const updateStreamRequest: UpdateStreamRequest = { stream_id: streamID, rule_id: ruleID, status: 1 }
                axiosAuth.post("/v1/stream", updateStreamRequest).then((resp) => {
                    let data: ServerResponse = resp.data
                    console.log("Update stream request success:" + data)
                }).catch((error: AxiosError) => {
                    let resp = error.response?.data
                    console.log("Update stream request error:" + resp)
                    setErrorMsg("Error while creating rule")
                    return false
                })
            }
            console.log(data)
            return true
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
            return false
        })
    }

    const nextStep = async () => {
        let curStep = progress
        if (curStep == 1) {
            // TODO: Add validation
            setProgress(progress + 1)
        } else if (curStep == 2) {
            // Check JSON validity
            if (!validateStreamSchema()) {
                return
            }
            console.log("Stream schema valid")
            // Check stream name validity
            let streamNameOK = await checkStreamName()
            console.log("Validation of stream name:", streamNameOK)
            if (!streamNameOK) {
                return
            }
            // Create stream
            let createStreamOK = await createStream()
            console.log("Stream created successfully:", createStreamOK)
            if (createStreamOK) {
                addNewRule()
                setProgress(progress + 1)
            }
        } else if (curStep == 3) {
            let ruleNameOk = await checkRuleName()
            if (!ruleNameOk) {
                return
            }
            let createRuleOK = await createRule()
            if (createRuleOK) {
                setProgress(progress + 1)
            }
        } else if (curStep == 4) {
            createStream()
        }
    }

    const prevStep = async () => {
        setErrorMsg("")
        setProgress(progress - 1)
    }

    const evaluateTestData = async () => {
        const evaluateRuleRequest: EvaluateRuleRequest = { id: "1", data: JSON.parse(testData) }
        var resp: any
        return await axiosAuth.post("/v1/rule/evaluate/" + streamID, evaluateRuleRequest).then((resp) => {
            let data: ServerResponse = resp.data
            if (data.success?.data.success != null) {
                let results: string[] = data.success.data.success.map((e: any) => { return e.result })
                console.log("Final results", results)
                setTestResultData(results)
                setErrorMsg("")
                return true
            } else {
                setTestResultData(["No rules evaluated to true"])
            }
        }).catch((error: AxiosError) => {
            resp = error.response?.data
            setErrorMsg(resp.error?.msg || "")
            return false
        })
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
                            <input type="radio" readOnly={true} name="accordian-steps" checked={progress == 1} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-2"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 1 - </div> Generate API token</h4>
                            </div>
                            <div className="collapse-content">
                                <div className="flex flex-row w-full">
                                    <LabeledInput type={showAPIKey ? "text" : "password"} onChange={onStreamNameChange} value={session?.user.accessToken} label="API Token" top_label="" disabled={progress > 1} />
                                    <FontAwesomeIcon onClick={() => showHidePassword()} icon={faEye} className="ml-5 mt-1 cursor-pointer hover:text-indigo-500" />
                                </div>
                            </div>
                        </div>

                        {/* Step-2 : Create stream */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" readOnly={true} name="accordian-steps" checked={progress == 2} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 2 - </div> Register schema</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <LabeledInput type="text" onChange={onStreamNameChange} placeholder="Ex:add-cash-events" label="Stream name" top_label="Choose a unique stream name" disabled={progress > 2} />
                                    <label className="label">
                                        <span className="label-text">Input sample event for registering schema</span>
                                    </label>
                                    <ModelDisplay placeholder='{ "amount": 100, "type": "CC" }' disabled={progress > 2} onChange={setSchema} />
                                </div>
                            </div>
                        </div>

                        {/* Step-3 : Create rule */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" readOnly={true} name="accordian-steps" checked={progress == 3} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 3 - </div> Create rule</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <LabeledInput type="text" onChange={onRuleNameChange} label="Rule name" top_label="Choose a unique rule name" disabled={progress > 3} />
                                    <CustLabel label="Configure conditions" disabled={progress > 4} />
                                    {
                                        [...ruleMap.entries()].map(([ruleID, rule]) =>
                                            <div className='flex flex-row-reverse justify-around border-dashed border rounded-sm border-gray-500 px-6 py-2' key={ruleID}>
                                                <FontAwesomeIcon onClick={progress == 3 && rule.order > 1 ? () => removeRule(ruleID) : undefined} icon={faCircleMinus} className={clsx({ "": true }, { "text-custom-red cursor-pointer hover:text-indigo-700": progress == 3 && rule.order > 1 }, { "text-gray-600 cursor-not-allowed": progress > 3 || rule.order == 1 })} />
                                                < div className='flex grow'>
                                                    <RuleDataSetter initialSuggestion={schemaKeys} id={ruleID} ruleUpdatedCB={updateRule} disabled={progress >= 4}></RuleDataSetter>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <CustomButton onClick={() => addNewRule()} licon={faCirclePlus} text={"Add rule"} />
                                </div>
                            </div>
                        </div>

                        {/* Step-4 : Test rule */}
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" readOnly={true} name="accordian-steps" checked={progress == 4} />
                            <div className="collapse-title p-0 text-xl font-medium">
                                <h4 className="h4 mb-1"><div className="font-architects-daughter text-xxl text-purple-600 mb-2 inline-block">Step 4 - </div> Test rule</h4>
                            </div>
                            <div className="collapse-content">
                                <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                                    <label className="label">
                                        <span className="label-text">Input test event</span>
                                    </label>
                                    <div className="flex flex-row justify-around">
                                        <div className='basis-4/12'>
                                            <ModelDisplay onChange={setTestData} disabled={false} placeholder='Enter sample event' />
                                        </div>
                                        <CustomButton onClick={evaluateTestData} className="2/12" ricon={faArrowRight} text={"Evaluate"} />
                                        <div className='basis-4/12'>
                                            <textarea value={testResultData} className="textarea m-0 p-0 border-1 min-w-full min-h-full resize-none rounded-none text-xs font-mono bg-gray-800"></textarea>
                                        </div>
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
                        <CustomButton onClick={nextStep} ricon={faArrowRight} text="Next" />
                    }
                </div>
            </div >
        </section >
    )
}

export default GetStarted
