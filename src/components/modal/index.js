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
  const [err, setError] = useState('');

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
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
      setError('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, err]);

  const subscribeToNewsletter = async () => {
    try {
      const response = await axios.post(
        'https://newsletter-production-00b2.up.railway.app/user',
        {
          email,
          firstName,
          lastName,
        }
      );
      // console.log(response)
      setMessage(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    subscribeToNewsletter();
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

            <button type="submit">Subscribe</button>
            {message.message !== 'Subscribed to newsletter successfully' ? (
              <p style={{ color: 'red', position: 'relative', top: 10 }}>
                {err}
              </p>
            ) : (
              <p style={{ color: 'green', position: 'relative', top: 10 }}>
                {message.message}
              </p>
            )}
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
