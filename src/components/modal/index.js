import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import styles from '../../../public/modal.module.css';
import LoadingButton from 'components/LoadingButton';
import Image from 'next/image';

ReactModal.setAppElement('#__next');

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [err, setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showThanksModal, setShowThanksModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowModal(scrollPosition >= 500 && scrollPosition < 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isSubscribed = localStorage.getItem('subscribed');
    setSubscribed(Boolean(isSubscribed));
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

  const subscribeToNewsletter = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://drugstoc-newsletter-mailchimp.onrender.com/subscribe',
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
      const errorMessage =
        error.message === 'Server Error'
          ? 'Internal server error, try again later'
          : 'User already exists';
      setErr(errorMessage);
    }
    setIsLoading(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    subscribeToNewsletter();
  };

  const closeModal = () => {
    const now = new Date();
    const oneMonthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('close', oneMonthFromNow.toISOString());
    setShowModal(false);
  };

  const removedModal = typeof localStorage !== 'undefined' ? localStorage.getItem('close') : null;

  if (removedModal) {
    const removeDate = new Date(removedModal);
    if (removeDate <= new Date()) {
      localStorage.removeItem('close');
      removedModal = false;
    }
  }

  return (
    <>
      {!subscribed && !removedModal && (
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
              onClick={closeModal}
              alt="Close"
            />
          </div>
          <h2 style={{ fontFamily: 'Poppins' }}>Subscribe to our Newsletter</h2>
          {!subscribed && (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
                required
              />

              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={firstName}
                autoComplete="off"
                onChange={e => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                autoComplete="off"
                onChange={e => setLastName(e.target.value)}
                required
              />
              <button
                type={isLoading ? 'button' : 'submit'}
                style={{
                  fontFamily: 'Poppins',
                  height: '36.782px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isLoading ? <LoadingButton /> : 'Subscribe'}
              </button>
            </form>
          )}
          {message && <p className={styles.success}>{message}</p>}
          {err && <p className={styles.error}>{err}</p>}
          <p
            className={styles.fields}
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
              position: 'relative',
              zIndex: 1,
            }}
          >
            Thanks for subscribing!
          </h2>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1684534630/e993d191d03335fd09a1987db3f8d39a_smrtw8.gif"
            width="100%"
            height="100%"
            alt="Thank you"
          />
        </ReactModal>
      )}
    </>
  );
};

export default Modal;
