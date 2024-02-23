import clsx from 'clsx';
import React from 'react';

import { Item } from '@/types/item';

interface Props {
    placeholder: string
    initialSuggestion: Item[]
    onChange: (event: any) => void
    disabled: boolean
}

const Autocomplete = (props: Props) => {

    const [suggestions, setSuggestions] = React.useState<Item[]>([])
    const [selectedOptionKey, setSelectedOptionKey] = React.useState("")
    const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(-1)
    const [optionKeys, setOptionKeys] = React.useState<string[]>([])
    // i/p data
    const [value, setValue] = React.useState<string>("")

    const resetAllValues = () => {
        setSuggestions([])
        setSelectedOptionKey("")
        setSelectedOptionIndex(-1)
    }

    const updateSuggestions = (event: any) => {
        resetAllValues()
        var curToken = event.target.value.split(" ").pop() || ""
        // Update suggestions based on last token
        console.log("Cur token", curToken)
        // Filter suggestions based on curToken prefix
        let filteredSuggestions: Item[] = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.displayName.startsWith(curToken));
        setSuggestions(filteredSuggestions)
        setOptionKeys(filteredSuggestions.map((a: Item) => (a.id)))
        setSelectedOptionIndex(-1)
    }

    const valueChanged = async (event: any) => {
        updateSuggestions(event)
        // Set current value
        setValue(event.target.value)
        props.onChange(event.target.value)
    }

    const onKeyPressDown = async (e: any) => {
        if (e.key == "ArrowDown") {
            onKeyUpDownArrow(e, 1)
        } else if (e.key == "ArrowUp") {
            onKeyUpDownArrow(e, -1)
        } else if (e.key == "Enter") {
            onKeyEnter()
        } else if (e.key == "Escape") {
            resetAllValues()
        }
    }

    const onKeyUpDownArrow = async (event: any, step: number) => {
        if (suggestions.length == 0) {
            // Pressed for  the first time
            updateSuggestions(event)
            return
        }
        let newIndex = Math.abs(selectedOptionIndex + step) % (optionKeys.length)
        setSelectedOptionIndex(selectedOptionIndex + step)
        setSelectedOptionKey(optionKeys[newIndex])
    }

    const onKeyEnter = async () => {
        console.log("Filtered suggestions:", suggestions)
        console.log("selectedOptionKey:", selectedOptionKey)
        let selectedValue = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.id.startsWith(selectedOptionKey))[0];
        selectSuggestion(selectedValue)
    }

    const selectSuggestion = async (selectedSuggestion: Item) => {
        console.log("Suggestion selected:", selectedSuggestion.displayName)
        // Update the last value in the value list
        var tokens = value.split(" ")
        console.log(tokens)
        tokens.pop()
        tokens.push(selectedSuggestion.displayName)
        console.log(tokens)
        console.log("Updated value:", tokens.join(" "))
        setValue(tokens.join(" "))
        props.onChange(tokens.join(" "))
        resetAllValues()
    }

    return (
        <div className='flex flex-col w-full relative'>
            <input value={value} onChange={valueChanged} onKeyDown={onKeyPressDown} type="text" placeholder={props.placeholder} className="input input-xs input-bordered rounded-none font-mono w-full p-0 m-0 disabled:bg-gray-800" disabled={props.disabled} />
            <div className="absolute top-6 left-0 w-full join-vertical overlay">
                {
                    suggestions.map((e: Item) => (
                        <p key={e.id} onClick={() => selectSuggestion(e)} className={clsx({ "join-item text-sm font-mono py-1 px-2 cursor-pointer bg-gray-700 hover:bg-gray-800": true }, { "bg-gray-800": e.id == selectedOptionKey })}>{e.displayName}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Autocomplete
