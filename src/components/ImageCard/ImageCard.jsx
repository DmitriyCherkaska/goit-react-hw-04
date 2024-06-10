
const ImageCard = ({image}) => {

  return (
    <li>
    <div>
      <img src={image.url} alt={image.alt} />
    </div>
  </li>
  )
}

export default ImageCard;
