import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import "./App.css";

const App = () => {
  console.log("App component is rendered");

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const API_URL = "nBjDx3M3zD2WrpPhfkSHVh1YXawb-uZYOaY5iVd1jYc";

  const fetchImages = async (searchTerm, page) => {
    setLoading(true);
    try {
      const url = `https://api.unsplash.com/photos/?query=${searchTerm}&page=${page}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          API_URL,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data.results]);
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (searchTerm) => {
    console.log("Search term:", searchTerm);
    setImages([]);
    setPage(1);
    setSearchTerm(searchTerm);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    console.log("Use effect is called");
    if (searchTerm !== "") {
      fetchImages(searchTerm, page);
    }
  }, [searchTerm, page]);

  return (
    <>
      <Toaster>
        <div>
          <SearchBar onSubmit={handleSubmit} />
          {loading && <Loader />}
          {error && <ErrorMessage />}
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {!loading && images.length > 0 && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
          <ImageModal
            isOpen={modalIsOpen}
            image={selectedImage}
            closeModal={closeModal}
          />
        </div>
      </Toaster>
    </>
  );
};

export default App;
