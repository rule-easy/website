import clsx from 'clsx';
import React from 'react';

interface Item {
    id: string
    name: string
    displayName: string
}

const Autocomplete = (props: any) => {

    const [suggestions, setSuggestions] = React.useState<Item[]>([])
    const [value, setValue] = React.useState<string>("")
    const [selectedOptionKey, setSelectedOptionKey] = React.useState("")
    const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(-1)
    const [optionKeys, setOptionKeys] = React.useState<string[]>([])

    const resetAllValues = () => {
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
        console.log(event.target.value)
        if (event.target.value == "") {
            setValue(event.target.value)
            return
        }
        let filteredSuggestions = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.displayName.startsWith(event.target.value));
        updateSuggestions(filteredSuggestions)
        props.onChange({ id: -1, name: event.target.value, displayName: event.target.value })
        setValue(event.target.value)
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
        setSelectedOptionIndex(selectedOptionIndex + step)
        setSelectedOptionKey(optionKeys[newIndex])
    }

    const onKeyEnter = async () => {
        let selectedValue = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.id.startsWith(selectedOptionKey))[0];
        selectSuggestion(selectedValue)
    }

    const selectSuggestion = async (selectedSuggestion: Item) => {
        console.log("Suggestion selected:", selectedSuggestion.displayName)
        setValue(selectedSuggestion.displayName)
        props.onSuggestionSelect(selectedSuggestion)
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
