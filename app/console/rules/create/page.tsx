'use client'
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React from 'react';
import { v4 as uuid } from 'uuid';

import Button from '@/components/button';
import useAxiosAuth from '@/lib/interceptors/hooks/useAxiosAuth';
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
    key: string;
    data: string
}

const CreateRule = () => {
    const [progress, setProgress] = React.useState(0);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [name, setName] = React.useState("")
    const [rule, setRule] = React.useState("")
    const [ruleMap, setRuleMap] = React.useState<Map<string, string>>(new Map<string, string>())

    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const checkName = async () => {
        // TODO: Validate name
    }
    const validateSchema = async () => {
        // TODO: Validate JSON schema
    };
    const createRule = async () => {
        addNewRule()
        setProgress(4)
    }

    const nextStep = async () => {
        if (progress == 1) {
            checkName()
        } else if (progress == 2) {
            validateSchema()
        } else {
            createRule()
        }
        setProgress(progress + 1)
    }

    const prevStep = async () => {
        setErrorMsg("")
        setProgress(progress - 1)
        setRule("")
    }

    const contructRule = async () => {
        let updateRule = ""
        for (let [k, v] of ruleMap) {
            updateRule += " " + v
        }
        setRule(updateRule)
    }

    const addNewRule = async () => {
        setRuleMap(new Map(ruleMap.set(uuid(), "")))
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
        setRuleMap(new Map(ruleMap.set(ruleId, updated_rule)))
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
                <ProgressSteps progress={progress} steps={['Select stream', 'Choose a name', 'Configure rule', 'Test', 'Submit']} />
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
                    <DropDown placeholder="----- Select stream -----" options={['add-cash', 'withdrawals', 'promotions']} disabled={progress > 1} />
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
                        {/* <div className='flex flex-row justify-around'>
                            <div className='flex flex-row items-center'>
                                <FontAwesomeIcon icon={faCircleMinus} className=" text-gray-600 cursor-not-allowed" />
                            </div>
                            <RuleDataSetter id="687e1b23-80f4-463d-93d3-8293ad675e81" parentCallback={updateRule}></RuleDataSetter>
                            <div className='flex flex-row items-center '>
                                <FontAwesomeIcon onClick={() => addNewRule()} icon={faCirclePlus} className=" text-custom-green cursor-pointer hover:text-indigo-700" />
                            </div>
                        </div> */}
                        {
                            [...ruleMap.entries()].map(([key, value]) =>
                                <div className='flex flex-row justify-around' key={key}>
                                    <div className='flex flex-row items-center'>
                                        <FontAwesomeIcon onClick={() => removeRule(key)} icon={faCircleMinus} className=" text-custom-red cursor-pointer hover:text-indigo-700" />
                                    </div>
                                    <RuleDataSetter id={key} parentCallback={updateRule}></RuleDataSetter>
                                    <div className='flex flex-row items-center '>
                                        <FontAwesomeIcon onClick={() => addNewRule()} icon={faCirclePlus} className=" text-custom-green cursor-pointer hover:text-indigo-700" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <label className="label mt-10">
                        <span className="label-text">Final rule</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 font-mono" placeholder='amount == 200 && ...' value={rule} readOnly></textarea>
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
                    <Button onClick={nextStep} ricon={faFlagCheckered} text={"Finish"} />
                }
            </div>
        </div >
    )
}

export default CreateRule