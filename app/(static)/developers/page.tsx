'use client'

import CustomButton from '@/components/button';
import ModelDisplay from '@/components/modeldisplay';
import RuleDataSetter from '@/components/ruleselector';
import { Rule } from '@/types/rules';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Documentation() {

    const updateRule = async (ruleId: string, rule: Rule) => {
        console.log("Rule changed", ruleId, rule)
    }

    const onChange = async (params: string) => {

    }
    return (
        <div className='flex flex-col mt-40 pl-8 p-4 border-dashed border rounded-sm border-gray-500'>
            {/* < div className='flex flex-col'>
                <RuleDataSetter id="abc" disabled={false} ruleUpdatedCB={updateRule} initialSuggestion={[{ id: "1", name: "hello", displayName: "hello" }, { id: "3", name: "hi", displayName: "hi" }]}></RuleDataSetter>
                <div className="flex flex-row w-full lg:flex-row lg:justify-between">
                    <ModelDisplay placeholder='Enter valid JSON' disabled={false} onChange={onChange} />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="form-control mt-2">
                <label className="label">
                    <span className="label-text">Input test event</span>
                </label>
                <div className="flex flex-row justify-around">
                    <div className='basis-4/12'>
                        <ModelDisplay disabled={false} placeholder='Enter sample event' />
                    </div>
                    <CustomButton className="2/12" licon={faArrowRight} text={"Test"} />
                    <div className='basis-4/12'>
                        <textarea value={"hello"} className="textarea m-0 p-0 border-1 min-w-full min-h-full resize-none rounded-none text-xs font-mono bg-gray-800"></textarea>
                    </div>
                </div>
            </div> */}
        </div >
    )
}
