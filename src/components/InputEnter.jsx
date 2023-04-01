import React from 'react'
import { useState } from 'react'

export const InputEnter = ({ onEnter }) => {

    const [inputValue, setInputValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        if (inputValue === '') return;
        onEnter(inputValue)
        setInputValue('')
    }

    const inputChangeHandler = ({ target }) => {
        setInputValue(target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={inputChangeHandler} />
        </form>
    )
}
