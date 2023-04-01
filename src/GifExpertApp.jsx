import React from 'react'
import { useState } from 'react'
import { GifGrid, InputEnter } from './components'
import { sentenceCaser } from './helpers/sentenceCaser.js'

export const GifExpertApp = () => {

    const [search, setSearch] = useState('')

    const addSearch = (newSearch) => {
        if(search.toLowerCase()===newSearch.toLowerCase())return;
        setSearch(sentenceCaser(newSearch))
    }

    return (
        <>
            {/* Input */}
            <InputEnter onEnter={addSearch} />

            {/* Listado de Gif */}
            {search && <GifGrid key={search} search={search} limit={20}/>}
        </>

    )
}
