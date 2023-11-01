'use client'
import { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Stream as Item } from 'stream';
import { v4 as uuid } from 'uuid';

import Button from '@/components/button';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
import { ServerResponse } from '@/types/auth';
import {
    faArrowLeft, faArrowRight, faCircleMinus, faCirclePlus, faDatabase, faFlagCheckered, faPlus,
    faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropDown from '../../components/dropdown';
import LabelledInput from '../../components/labelledinput';
import ProgressSteps from '../../components/progresssteps';
import RuleDataSetter from '../../components/ruleselector';

interface Rule {
    id: string;
    data: string;
    order: number;
}

interface Item {
    id: string
    name: string
}

const CreateRule = () => {
    // All stream names
    const [allStreams, setAllStreams] = React.useState<Item[]>([])
    // Stream states
    const [streamName, setStreamName] = React.useState<string>("")
    const [schemaKeys, setStreamSchemaKeys] = React.useState<Item[]>([])

    // Progress steps
    const [progress, setProgress] = React.useState(0)
    const [errorMsg, setErrorMsg] = React.useState("")
    // Rule name, ID and details
    const [name, setName] = React.useState("")
    const [rule, setRule] = React.useState("")
    // Rule data - Condition vs string
    const [ruleMap, setRuleMap] = React.useState<Map<string, Rule>>(new Map<string, Rule>())
    // Total rrules
    const [totalRules, setTotalRules] = React.useState(1)

    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const getAllStreams = async () => {
        // Check for duplicate name
        axiosAuth.get("/v1/stream").then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                console.log(data.success.data)
                setAllStreams(data.success.data)
            }
            setProgress(progress + 1)
        }).catch((err: AxiosError) => {
            setErrorMsg("Error")
        })
    }

    const streamSelected = async (stream: Item) => {
        console.log("Stream selected:", stream)
        setStreamName(stream.name)
    }

    // TODO: Not the best way of setting
    useEffect(() => {
        getStream();
    }, [streamName]);

    const getStream = async () => {
        if (streamName == "") { return }
        axiosAuth.get("/v1/stream?name=" + streamName).then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                var schemaLoc: Item[] = []
                console.log(data)
                data.success.data[0].schema_keys.forEach((element: string) => {
                    schemaLoc.push({ id: uuid(), name: element })
                });
                console.log(schemaLoc)
                setStreamSchemaKeys(schemaLoc)
                setErrorMsg("")
            }
        }).catch((err: AxiosError) => {
            console.log(err)
            setErrorMsg("Could not fetch the stream. Please try again!!")
        })
    };

    const createActions = async () => {
        setProgress(4)
    }

    const checkRuleName = async () => {
        // Check for empty name
        if (name.length == 0) {
            setErrorMsg("Stream name cannot be empty")
            return
        }
        // Check for duplicate name
        axiosAuth.get("/v1/rule?name=" + name).then((resp: AxiosResponse) => {
            let data: ServerResponse = resp.data
            if (data.success?.data != null) {
                setErrorMsg("Rule with name " + name + " already exists")
            } else {
                setErrorMsg("")
                addNewRule()
                setProgress(progress + 1)
            }
        }).catch((err: AxiosError) => {
            setErrorMsg("Error")
        })
    }

    const nextStep = async () => {
        // Validation steps
        let curStep = progress
        if (curStep == 0) {
            getAllStreams()
        } else if (curStep == 1) {
            setProgress(progress + 1)
        } else if (curStep == 2) {
            checkRuleName()
        } else if (curStep == 3) {
            // Invoke rule creation API here
        } else if (curStep == 4) {
            createActions()
        }
    }

    const clearRules = async () => {
        setRule("")
        setRuleMap(new Map<string, Rule>())
        setTotalRules(1)
    }

    const prevStep = async () => {
        let curStep = progress
        setErrorMsg("")
        if (progress == 3) {
            clearRules()
        }
        setProgress(progress - 1)
    }

    const contructRule = async () => {
        let updateRule = ""
        for (let [ruleID, rule] of ruleMap) {
            updateRule += " " + rule.data
        }
        setRule(updateRule)
    }

    const addNewRule = async () => {
        console.log("Add new rule")
        let ruleID = uuid()
        setRuleMap(new Map(ruleMap.set(ruleID, { id: ruleID, order: totalRules, data: "" })))
        setTotalRules(totalRules + 1)
        console.log(ruleMap)
        contructRule()
    }

    const removeRule = async (ruleId: string) => {
        console.log("Remove rule:", ruleId)
        ruleMap.delete(ruleId)
        setRuleMap(new Map(ruleMap))
        console.log(ruleMap)
        contructRule()
    }

    const updateRule = async (ruleId: string, updated_rule: string) => {
        console.log("Rule changed", ruleId, updated_rule)
        let rule = ruleMap.get(ruleId)
        setRuleMap(new Map(ruleMap.set(ruleId, { id: ruleId, order: rule?.order || 0, data: updated_rule })))
        console.log(ruleMap)
        contructRule()
    }

    return (
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col bg-custom-gray mr-2 p-2 rounded-xl'>
            {progress == 0 &&
                <div className='flex flex-col p-2'>
                    <p>
                        On PatternAct, Rules are set of customer defined logic that needs to be evaluated against each event in a stream. PatternAct systematically evaluates these rules for every incoming event in a stream.
                    </p>
                    <div className="flex justify-end col-span-6 mt-5">
                        <Button onClick={nextStep} licon={faShieldHalved} text={"Create new rule"} ricon={faArrowRight} />
                    </div>
                </div>
            }

            {/* Progress bar */}
            {progress > 0 &&
                <ProgressSteps progress={progress} steps={['Select stream', 'Choose a name', 'Configure rule', 'Configure actions', 'Submit']} />
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
                    <DropDown parentCallback={streamSelected} placeholder="----- Select stream -----" options={allStreams} disabled={progress > 1} />
                    <div className="divider lg:divider-horizontal">OR</div>
                    <Button licon={faPlus} ricon={faDatabase} href={"/console/streams/create"} text={"Create stream"} disabled={progress > 1} />
                </div>
            }

            {/* Step-2 - Select rule name */}
            {
                progress >= 2 &&
                <LabelledInput parentCallback={setName} label="Rule name" top_label="Choose a unique rule name" disabled={progress > 2} />
            }

            {/* Step-3 - Configure rule */}
            {
                progress >= 3 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control px-8">
                    <label className="label">
                        <span className="label-text">Configure rule</span>
                    </label>
                    <div className='flex flex-col'>
                        {
                            [...ruleMap.entries()].map(([ruleID, rule]) =>
                                <div className='flex flex-row justify-around' key={ruleID}>
                                    <div className='flex flex-row items-center'>
                                        <FontAwesomeIcon onClick={progress == 3 && rule.order > 1 ? () => removeRule(ruleID) : undefined} icon={faCircleMinus} className={clsx({ "text-custom-red cursor-pointer hover:text-indigo-700": progress == 3 && rule.order > 1 }, { "text-gray-600 cursor-not-allowed": progress > 3 || rule.order == 1 })} />
                                    </div>
                                    < div className='flex grow'>
                                        <RuleDataSetter initialSuggestion={schemaKeys} id={ruleID} parentCallback={updateRule} disabled={progress >= 4}></RuleDataSetter>
                                    </div>
                                    <div className='flex flex-row items-center '>
                                        <FontAwesomeIcon onClick={progress == 3 ? () => addNewRule() : undefined} icon={faCirclePlus} className={clsx({ "text-custom-green cursor-pointer hover:text-indigo-700": progress == 3 }, { "text-gray-600 cursor-not-allowed": progress > 3 })} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <label className="label mt-10">
                        <span className="label-text">Final rule</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 font-mono cursor-not-allowed disabled:bg-gray-800" placeholder='amount == 200 && ...' value={rule} readOnly disabled={progress >= 4} />
                </div>
            }

            {/* Navigation buttons */}
            <div data-aos="fade-down" data-aos-delay="200" className={clsx({ "flex flex-row mt-12": true }, { "justify-end": progress == 1 }, { "justify-between": progress >= 2 })}>
                {progress >= 2 &&
                    <Button onClick={prevStep} licon={faArrowLeft} text={"Back"} />
                }
                {progress >= 1 && progress <= 3 &&
                    <Button onClick={nextStep} ricon={faArrowRight} text={"Next"} />
                }
                {progress >= 4 &&
                    <Button onClick={nextStep} ricon={faFlagCheckered} text={"Finish"} />
                }
            </div>
        </div >
    )
}

export default CreateRule