import PropTypes from 'prop-types'

export const GifItem = ({id, url, title}) => {

  return (
    <a href={url}>
      <img key={id} src={url} alt={title} />
    </a>
  )
}

GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}