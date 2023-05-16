import { screen, render, waitFor, getByRole} from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import React from "react";

describe('Testing GifExpertApp', () => {

    it('should render InputEnter', () => {
        render(<GifExpertApp/>)
        expect(screen.getByRole('textbox'))
    });

    it('should only render GifGrid after somehing was searched', async() => {

        render(<GifExpertApp/>)
        expect(screen.queryByRole('img')).not.toBeInTheDocument()

        act(()=>userEvent.type(screen.getByRole('textbox'), 'cats{enter}'))
        
        await waitFor(
            ()=>expect(screen.getAllByRole('img'))
        )
    });
    
    it('should not rerender GifGrid entering the same search consecutively', async() => {
        render(<GifExpertApp/>)

        const input = screen.getByRole('textbox')

        act(()=>userEvent.type(input, 'cats{enter}'))
        await waitFor(()=>
            expect(screen.getAllByRole('img'))
        )
        act(()=>userEvent.type(input, 'cats{enter}'))
        await waitFor(()=>
            expect(screen.queryByRole('heading')).not.toBeInTheDocument()
        )

    });

});