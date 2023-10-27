import React from 'react';

import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RuleDataSetter = (props: any) => {
    const [conditionEnabled, setConditionEnabled] = React.useState(false);
    const [operand1, setOperand1] = React.useState("")
    const [operand2, setOperand2] = React.useState("")
    const [operator, setOperator] = React.useState("")
    const [condition, setCondition] = React.useState("")

    const enableCondition = async () => {
        setConditionEnabled(true)
    }

    const operand1Changed = async (event: any) => {
        setOperand1(event.target.value)
        props.parentCallback(props.id, event.target.value + " " + operator + " " + operand2 + " " + condition);
    }
    const operatorChanged = async (event: any) => {
        setOperator(event.target.value)
        props.parentCallback(props.id, operand1 + " " + event.target.value + " " + operand2 + " " + condition);
    }
    const operand2Changed = async (event: any) => {
        setOperand2(event.target.value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + event.target.value + " " + condition);
    }
    const conditionChanged = async (event: any) => {
        setCondition(event.target.value)
        props.parentCallback(props.id, operand1 + " " + operator + " " + operand2 + " " + event.target.value);
    }
    return (
        <div>
            <div className='flex flex-row justify-around space-x-3 space-y-1'>
                <div className='flex flex-row items-center'>
                    <FontAwesomeIcon icon={faCircleMinus} className=" text-custom-red cursor-pointer hover:text-indigo-700" />
                </div>

                <input onChange={operand1Changed} type="text" placeholder="Start typing (ex: amount)" className="grow input input-bordered input-primary w-full max-w-xs" />

                <select onChange={operatorChanged} className="select select-primary w-full max-w-xs basis-2/12" defaultValue="==">
                    <option>==</option>
                    <option>&gt;=</option>
                    <option>&lt;=</option>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </select>

                <input onChange={operand2Changed} type="text" placeholder="Ex: 200" className="basis-6/12 input input-bordered input-primary w-full max-w-xs" />
                {!conditionEnabled &&
                    <div className='flex flex-row items-center '>
                        <FontAwesomeIcon onClick={() => enableCondition()} icon={faCirclePlus} className=" text-custom-green cursor-pointer hover:text-indigo-700" />
                    </div>
                }

                {conditionEnabled &&
                    <select onChange={conditionChanged} className="select select-primary w-full max-w-xs basis-2/12" defaultValue="&&">
                        <option>&&</option>
                        <option>||</option>
                    </select>
                }
            </div>
        </div>
    )
}

export default RuleDataSetter
