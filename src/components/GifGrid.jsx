import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

//Would be better if it were divided by columns and not just items,
//that way each column could fit in 100% width with custom amount 100% width items

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