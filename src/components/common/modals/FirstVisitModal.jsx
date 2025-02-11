import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalContactForm from '../../forms/modal-contact-form';

// Custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 999999,
    transition: 'opacity 0.3s ease-in-out',
    padding: '10px',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '450px',
    width: 'calc(100% - 20px)',
    maxHeight: '90vh',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-out',
    animation: 'dcModalFadeIn 0.5s ease forwards',
    overflow: 'visible',
  },
};

// Make sure to bind modal to your appElement
if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

const FirstVisitModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds for smoother appearance
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormSuccess = () => {
    // Close modal after 2 seconds of successful submission
    setTimeout(() => {
      setModalIsOpen(false);
    }, 800);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="First Visit Modal"
      closeTimeoutMS={300}
    >
      <div className="dc-first-visit-modal">
        <button
          onClick={closeModal}
          className="dc-modal-close"
          style={{
            position: 'absolute',
            right: '-10px',
            top: '-10px',
            background: '#fff',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#666',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            zIndex: 1,
          }}
        >
          ×
        </button>
        <div className="dc-modal-header">
          <h3>Welcome to Digital Cappuccino!</h3>
          <p>
            We&apos;d love to hear from you. Please fill out the form below to
            connect with us.
          </p>
        </div>
        <ModalContactForm onSuccess={handleFormSuccess} />
      </div>
    </Modal>
  );
};

export default FirstVisitModal;
