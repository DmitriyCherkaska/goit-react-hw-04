import { useState, useEffect } from 'react';
import { ToastProvider } from 'react-hot-toast';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn';
import ImageModal from './ImageModal';
import "./App.css";

const App = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`API_URL_HERE${searchTerm}&page=${page}`);
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.results]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleSubmit = (searchTerm) => {
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
    if (searchTerm !== '') {
      fetchImages();
    }
  }, [fetchImages, searchTerm], page);

  return (
    <ToastProvider>
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {!loading && images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
        <ImageModal isOpen={modalIsOpen} image={selectedImage} closeModal={closeModal} />
      </div>
    </ToastProvider>
  );
};

export default App;
