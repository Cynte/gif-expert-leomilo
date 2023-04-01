import { useEffect, useState } from 'react'
import { getGifsData } from '../helpers/getGifsData'

export const useFetchGifs = (search, limit) => {
    const [gifsData, setGifsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const asyncSetGifsData = async() => {
      const newGifs = await getGifsData(search, limit)
      setGifsData(newGifs)
      setIsLoading(false)
    }

    useEffect(()=>{asyncSetGifsData()}, [])

    return {gifsData, isLoading}
}
