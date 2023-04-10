import React from 'react'
import { useState } from 'react'

//Custom input with 'OnEnter' property available
//Prevents it if input.value is empty
//Can optionally receive placeholder text as property
export const InputEnter = ({ onEnter, placeholder='' }) => {

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
                placeholder={placeholder}
                value={inputValue}
                onChange={inputChangeHandler} />
        </form>
    )
}
