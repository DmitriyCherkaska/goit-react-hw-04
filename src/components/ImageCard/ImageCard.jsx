
const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageCard;
