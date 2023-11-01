import React from 'react';

import { prefix } from '@fortawesome/free-solid-svg-icons';

interface Item {
    id: string
    name: string
}

const Autocomplete = (props: any) => {

    const [suggestions, setSuggestions] = React.useState<Item[]>([])
    const [value, setValue] = React.useState<string>("")

    const valueChanged = async (event: any) => {
        if (event.target.value == "") {
            setSuggestions([])
            return
        }
        let filteredSuggestions = props.initialSuggestion.filter((curSuggestion: Item) => curSuggestion.name.startsWith(event.target.value));
        setSuggestions(filteredSuggestions)
    }

    const updateSuggestions = async () => {
    }

    const selectSuggestion = async (selectedSuggestion: string) => {
        console.log(selectedSuggestion)
        setSuggestions([])
        setValue(selectedSuggestion)
    }

    return (
        <div className='flex flex-col w-full max-w-xs relative'>
            <input onChange={valueChanged} type="text" placeholder={props.placeholder} className="input input-xs input-bordered font-mono w-full max-w-xs p-0 m-0 disabled:bg-gray-800" disabled={props.disabled} />
            <div className="absolute top-6 left-0 w-full join-vertical overlay">
                {
                    suggestions.map((e: Item) => (
                        <p key={e.id} onClick={() => selectSuggestion(e.name)} className="join-item bg-gray-700 text-sm font-mono py-1 px-2 justify-start cursor-pointer hover:bg-gray-800">{e.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Autocomplete
