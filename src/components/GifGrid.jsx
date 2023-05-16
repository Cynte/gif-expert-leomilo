import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import PropTypes from "prop-types"

//TODO: Maybe I should make this component less abstract by deleting the GifItems file

//Receives a search prop to look for GIFs with matching tags, and a limit for the amount of GIFs to render
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

GifGrid.propTypes = {
  search: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired
}