import { screen, render } from "@testing-library/react";
import { GifGrid } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";
import '@testing-library/jest-dom/extend-expect';

jest.mock("../hooks/useFetchGifs")

describe('Testing component GifGrid', () => {

    const search = 'Minecraft'
    const limit = 1

    it('should initially show the "Loading..." text', () => {

        useFetchGifs.mockReturnValue({
                isLoading: true,
                gifsData: []
            })

        const {getByRole} = render(<GifGrid search={search} limit={limit}/>)
        expect(getByRole('heading')).toHaveTextContent('Loading...')
    });

    it('should properly render the GIFs fetched', () => {

        const dataList = [{
                id: 'a',
                title: 'a',
                url: 'https//:example.com/a.gif'
            },
            {
                id: 'b',
                title: 'b',
                url: 'https//:example.com/b.gif'
        }]
        
        useFetchGifs.mockReturnValue({
            isLoading: false,
            gifsData: dataList
        })
        
        render(<GifGrid search={search} limit={limit}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
        expect(screen.getByAltText('a')).toBeInTheDocument()
        expect(screen.getByAltText('b')).toBeInTheDocument()
        expect(screen.getAllByRole('link')[0].href).toContain('https//:example.com/a.gif')
        expect(screen.getAllByRole('link')[1].href).toContain('https//:example.com/b.gif')
    });
});