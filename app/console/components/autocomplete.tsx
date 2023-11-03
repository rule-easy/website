import clsx from 'clsx';
import React from 'react';

import { prefix } from '@fortawesome/free-solid-svg-icons';

interface Item {
    id: string
    name: string
}

const Autocomplete = (props: any) => {

    const [suggestions, setSuggestions] = React.useState<Item[]>([])
    const [value, setValue] = React.useState<string>("")
    const [selectedOptionKey, setSelectedOptionKey] = React.useState("")
    const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(-1)
    const [optionKeys, setOptionKeys] = React.useState<string[]>([])

    const resetAllValues = () => {
        console.log("Value reset")
        setSuggestions([])
        setSelectedOptionKey("")
        setSelectedOptionIndex(-1)
    }

    const updateSuggestions = (filteredSuggestions: Item[]) => {
        setSuggestions(filteredSuggestions)
        setOptionKeys(filteredSuggestions.map((a: Item) => (a.id)))
        setSelectedOptionIndex(-1)
    }

    const valueChanged = async (event: any) => {
        resetAllValues()
        if (event.target.value == "") return
        let filteredSuggestions = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.name.startsWith(event.target.value));
        updateSuggestions(filteredSuggestions)
    }

    const onKeyPressDown = async (e: any) => {
        console.log(e)
        if (e.key == "ArrowDown") {
            onKeyUpDownArrow(1)
        } else if (e.key == "ArrowUp") {
            onKeyUpDownArrow(-1)
        } else if (e.key == "Enter") {
            onKeyEnter()
        }
    }

    const onKeyUpDownArrow = async (step: number) => {
        if (suggestions.length == 0) {
            // Pressed for  the first time
            updateSuggestions(props.initialSuggestion)
            return
        }
        let newIndex = Math.abs(selectedOptionIndex + step) % (optionKeys.length)
        console.log(optionKeys)
        console.log(newIndex, selectedOptionIndex)
        console.log(optionKeys[newIndex])
        setSelectedOptionIndex(selectedOptionIndex + step)
        setSelectedOptionKey(optionKeys[newIndex])
    }

    const onKeyEnter = async () => {
        let selectedValue = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.id.startsWith(selectedOptionKey))[0];
        selectSuggestion(selectedValue.name)
    }

    const selectSuggestion = async (selectedSuggestion: string) => {
        console.log("Suggestion selected:", selectedSuggestion)
        setValue(selectedSuggestion)
        props.onSuggestionSelect(selectedSuggestion)
        resetAllValues()
    }



    return (
        <div className='flex flex-col w-full max-w-xs relative'>
            <input onChange={valueChanged} onKeyDown={onKeyPressDown} type="text" placeholder={props.placeholder} className="input input-xs input-bordered rounded-none font-mono w-full p-0 m-0 disabled:bg-gray-800" disabled={props.disabled} />
            <div className="absolute top-6 left-0 w-full join-vertical overlay">
                {
                    suggestions.map((e: Item) => (
                        <p key={e.id} onClick={() => selectSuggestion(e.name)} className={clsx({ "join-item text-sm font-mono py-1 px-2 justify-start cursor-pointer bg-gray-700 hover:bg-gray-800": true }, { "bg-gray-800": e.id == selectedOptionKey })}>{e.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Autocomplete
