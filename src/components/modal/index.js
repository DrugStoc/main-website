import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../public/modal.module.css';
ReactModal.setAppElement('#__next');

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 500 && scrollPosition < 800 && !subscribed) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const isSubscribed = localStorage.getItem('subscribed');
    if (isSubscribed) {
      setSubscribed(true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
    };
    try {
      const response = await axios.post(
        'https://newsletter-production-00b2.up.railway.app/user',
        formData
      );
      setMessage(response.message);
      localStorage.setItem('subscribed', true);
      setSubscribed(true);
    } catch (error) {
      console.error(error);
      // Show error message or do something else
    }
  };

  return (
    <div>
      {!subscribed && (
        <ReactModal isOpen={showModal} className={styles.modal}>
          <h2>Subscribe to our newsletter!</h2>
          <img
            className={styles.icon}
            src="https://res.cloudinary.com/bizstak/image/upload/v1683510743/cancel-icon_kpxodz.svg"
            onClick={() => setShowModal(false)}
            width={25}
          />

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              autoComplete="Off"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter First Name"
              autoComplete="Off"
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Enter Last Name"
              autoComplete="Off"
              onChange={e => setLastName(e.target.value)}
            />

            <button type="submit" onClick={() => setShowModal(false)}>
              Subscribe
            </button>
            {/* <p>{message}</p> */}
          </form>
          {/* 
          <button className={styles.cancel} onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button onClick={() => setShowModal(false)}>X</button> */}
        </ReactModal>
      )}
    </div>
  );
};

export default Modal;
