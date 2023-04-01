export const GifItem = ({id, url, title}) => {

  return (
    <a href={url}>
      <img key={id} src={url} alt={title} />
    </a>
  )
}
