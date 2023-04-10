import PropTypes from 'prop-types'

//Receives API single gif data and destructures the id, url and title of the gif from it
export const GifItem = ({id, url, title}) => {

  //returns a clickable GIF with unique key, functional URL and an ALT matching with the title
  return (
    <a href={url}>
      <img key={id} src={url} alt={title} />
    </a>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}