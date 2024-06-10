import Modal from 'react-modal';

const ImageModal = ({ isOpen, image, closeModal }) => {
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <img src={image} alt="Enlarged Image" />
      </Modal>
    );
  };

export default ImageModal;