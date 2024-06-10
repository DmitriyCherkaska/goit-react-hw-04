// import some from "./Profile.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({images}) => {
  
  return (
    <ul>
      {images.map((image, index) => (<ImageCard key={index} image={image} />))}
    </ul>
  );
};

export default ImageGallery;
