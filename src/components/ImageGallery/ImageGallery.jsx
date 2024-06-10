import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  console.log("ImageGallery component is rendered with images:", images);

  return (
    <ul>
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
