import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

//Receives a search prop to look for GIFs with matching tags,
//and a limit to specify the amount of GIFs in the grid.

//Returns a grid with the rendered gif items, and loading screen if loading
export const GifGrid = ({search, limit}) => {

  const {gifsData, isLoading} = useFetchGifs(search, limit)

  return (
    <div className="card-grid">

      {/* Loading text */}
      {isLoading && <h2>Loading...</h2>}

      {/* Gif items */}
      {gifsData.map(({id, url, title})=>(
        <div className="card" key={id}>
          <GifItem key={id} url={url} title={title}/>
        </div>))}
    </div>
  )
}