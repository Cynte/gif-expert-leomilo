import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../hooks/useFetchGifs";

describe('Testing hook useFetchGifs', () => {

    it('should return the correct initial states', () => {

        const {result} = renderHook(()=>useFetchGifs('cat', 10))
        const {gifsData, isLoading} = result.current
        
        expect(gifsData.length).toBe(0)
        expect(isLoading).toBeTruthy()
    });

    it('should return gifData', async() => {
        const {result} = renderHook(()=>useFetchGifs('cat', 10))
        await waitFor(
            ()=>expect(result.current.gifsData.length).toBeGreaterThan(0)
        )
    });

    it('should return gifData in correct amount', async() => {
        
        const {result} = renderHook(()=>useFetchGifs('cat', 10))
        await waitFor(
            ()=>expect(result.current.gifsData.length).toBe(10)
        )
    });
    
    it('should return gifData with correct tags', async() => {
        
        const {result} = renderHook(()=>useFetchGifs('cat', 10))
        await waitFor(
            ()=>expect(result.current.gifsData.length).toBeGreaterThan(0)
        )

        const {gifsData} = result.current
        const taggedList = []
        gifsData.map(i=>{
            if (i.title.toLowerCase().includes('cat')) {
                taggedList.push(i.title)
            }}
        )
        expect(taggedList.length).toBeGreaterThan(0)
    });

    it('should change isLoading to false when finished', async() => {
        
        const {result} = renderHook(()=>useFetchGifs('cat', 10))
        await waitFor(
            ()=>expect(result.current.gifsData.length).toBeGreaterThan(0)
        )
        
        const {isLoading} = result.current
        expect(isLoading).toBeFalsy()
    });

});