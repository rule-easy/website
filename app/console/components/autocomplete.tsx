import React from 'react';

import { prefix } from '@fortawesome/free-solid-svg-icons';

interface Item {
    id: string
    name: string
}

const Autocomplete = (props: any) => {

    const [suggestions, setSuggestions] = React.useState<string[]>([])
    const [initialized, setInitialized] = React.useState(false)
    const [initialSuggestion, setInitialSuggestion] = React.useState<string[]>([])
    const [value, setValue] = React.useState<string>("")

    const valueChanged = async (event: any) => {
        if (!initialized) {
            loadSuggestions()
            setInitialized(true)
        }
        let filteredSuggestions = initialSuggestion.filter(curSuggestion => curSuggestion.startsWith(event.target.value));
        console.log(initialSuggestion)
        console.log(filteredSuggestions)
        setSuggestions(filteredSuggestions)
    }

    const loadSuggestions = async () => {
        setInitialSuggestion([
            "batters.batter[i].id",
            "batters.batter[i].type",
            "id",
            "name",
            "ppu",
            "topping[i].id",
            "topping[i].type",
            "type"
        ])
    }

    const updateSuggestions = async () => {
    }

    const selectSuggestion = async (selectedSuggestion: string) => {
        console.log(selectedSuggestion)
        setSuggestions([])
        setValue(selectedSuggestion)
    }

    return (
        <div className='flex flex-col'>
            <input onChange={valueChanged} type="text" placeholder="Start typing (ex: amount)" className="grow input input-bordered input-primary w-full max-w-xs disabled:bg-gray-800" disabled={props.disabled} />
            <div className="join join-vertical overlay">
                {
                    suggestions.map((e) => (
                        <p key={e} onClick={() => selectSuggestion(e)} className="join-item bg-gray-700 text-sm font-mono py-1 px-2 justify-start cursor-pointer hover:bg-gray-800">{e}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Autocomplete
