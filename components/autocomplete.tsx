import clsx from 'clsx';
import React from 'react';

import { Item } from '@/types/item';

interface Props {
    placeholder: string
    initialSuggestion: Item[]
    onChange: (event: string) => void
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
        // Update suggestions based on last token
        var curToken = event.target.value.split(" ").pop() || ""
        console.log("Update suggestions triggered. Finding suggestions with prefix:", curToken)
        // Filter suggestions based on curToken prefix
        let filteredSuggestions: Item[] = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.displayName.startsWith(curToken));
        setSuggestions(filteredSuggestions)
        console.log("Found suggestions:", filteredSuggestions.map((i: Item) => { return i.displayName }))
        // Update option keys
        let newOptionKeys = filteredSuggestions.map((i: Item) => (i.id))
        setOptionKeys(newOptionKeys)
        console.log("Option keys:", newOptionKeys)
        // Make the first suggestion as selected
        setSelectedOptionIndex(0)
        setSelectedOptionKey(newOptionKeys[0])
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

    const selectSuggestionIndex = async (index: number) => {
        console.log("newIndex:", index)
        console.log("optionKeys[newIndex]:", optionKeys[index])
        setSelectedOptionIndex(index)
        setSelectedOptionKey(optionKeys[index])
    }

    const onKeyUpDownArrow = async (event: any, step: number) => {
        console.log("Pressed up-down key", step)
        if (suggestions.length == 0) {
            // Pressed for  the first time
            updateSuggestions(event)
            return
        }
        let newIndex = Math.abs(selectedOptionIndex + step) % (optionKeys.length)
        selectSuggestionIndex(newIndex)
    }

    const onKeyEnter = async () => {
        console.log("Filtered suggestions:", suggestions)
        console.log("selectedOptionKey:", selectedOptionKey)
        let selectedValue = suggestions.filter((curSuggestion: Item) => curSuggestion.id.startsWith(selectedOptionKey))[0];
        console.log("selectedValue:", selectedValue)
        selectSuggestion(selectedValue)
    }

    const selectSuggestion = async (selectedSuggestion: Item) => {
        console.log("Suggestion selected:", selectedSuggestion.displayName)
        // Update the last value in the value list
        var tokens = value.split(" ")
        console.log("Before applying suggestion:", value)
        console.log(tokens)
        tokens.pop()
        tokens.push(selectedSuggestion.displayName)
        console.log(tokens)
        console.log("After applying suggestion:", tokens.join(" "))
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
