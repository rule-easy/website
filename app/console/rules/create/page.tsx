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

import DropDown from '../../components/dropdown';
import LabelledInput from '../../components/labelledinput';
import ProgressSteps from '../../components/progresssteps';
import RuleDataSetter from '../../components/ruleselector';

const CreateRule = () => {
    const [progress, setProgress] = React.useState(0);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [rule, setRule] = React.useState("")

    const axiosAuth = useAxiosAuth()
    const router = useRouter();

    const streamName = useRef("")
    const schema = useRef("")
    const [finalRule, setFinalRule] = React.useState("");
    let finalRuleName = ""

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
        setProgress(4)
    }

    const ruleNameChanged = async (ruleName: string) => {
        console.log("Rule name changed", ruleName)
        finalRuleName = ruleName
    }

    const ruleChanged = async (ruleId: string, one_rule: string) => {
        console.log("Rule changed", ruleId, one_rule)
        setRule(one_rule)
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
                        <Button onClick={nextStep} licon={faShieldHalved} text={"Create new rule"} ricon={faArrowRight} />
                    </div>
                </div>
            }
            <p>{rule}</p>
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
                <LabelledInput parentCallback={ruleNameChanged} label="Rule name" top_label="Choose a unique rule name" disabled={progress > 2} />
            }

            {/* Step-3 - Configure rule */}
            {
                progress >= 3 &&
                <div data-aos="fade-up" data-aos-delay="200" className="form-control pl-8">
                    <label className="label">
                        <span className="label-text">Configure rule</span>
                    </label>
                    <div className='flex flex-col'>
                        <RuleDataSetter id="absa-dasd-dasd" parentCallback={ruleChanged}></RuleDataSetter>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder='{ amount: 100, status: "COMPLETED", userID: "dsad-saas-dssa-dassa"}' value={rule} readOnly></textarea>
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