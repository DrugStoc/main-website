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
  const [err, setErr] = useState('');
  const [showThanksModal, setShowThanksModal] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 500 && scrollPosition < 800) {
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
      setErr('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, err]);

  const subscribeToNewsletter = async () => {
    try {
      const response = await axios.post(
        'https://drugstoc-main-subscription-production.up.railway.app/user',
        {
          email,
          firstName,
          lastName,
        }
      );
      setMessage(response.data.message);
      await new Promise(resolve => setTimeout(resolve, 3000));
      localStorage.setItem('subscribed', true);
      setSubscribed(true);
      setShowThanksModal(true);
    } catch (error) {
      error.message === 'Server Error'
        ? setErr('Internal server error, try again later')
        : setErr('User already exists');
    }
  };

  useEffect(() => {
    const isSubscribed = localStorage.getItem('subscribed');
    if (isSubscribed) {
      setSubscribed(true);
    }
  }, []);

  useEffect(() => {
    if (showThanksModal) {
      const timer = setTimeout(() => {
        setShowThanksModal(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showThanksModal]);

  const handleSubmit = e => {
    e.preventDefault();
    subscribeToNewsletter();
  };

  return (
    <>
      {subscribed === false && (
        <ReactModal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="Newsletter Subscription Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1683510743/cancel-icon_kpxodz.svg"
              width={25}
              onClick={() => setShowModal(false)}
            />
          </div>
          <h2>Subscribe to our Newsletter</h2>
          {!subscribed && (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                autoComplete="Off"
                onChange={e => setEmail(e.target.value)}
                required
              />

              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={firstName}
                autoComplete="Off"
                onChange={e => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                autoComplete="Off"
                onChange={e => setLastName(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
          {message && <p className={styles.success}>{message}</p>}
          {err && <p className={styles.error}>{err}</p>}
          <p
            style={{
              fontSize: 10,
              position: 'absolute',
              top: 50,
              right: '5%',
              fontWeight: 500,
            }}
          >
            All fields are required
          </p>
        </ReactModal>
      )}

      {subscribed && showThanksModal && (
        <ReactModal
          isOpen={true}
          contentLabel="Thanks for subscribing Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 254.359,
            }}
          >
            Thanks for subscribing!
          </h2>
        </ReactModal>
      )}
    </>
  );
};

export default Modal;
