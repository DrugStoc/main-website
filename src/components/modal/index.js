import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../public/modal.module.css';
ReactModal.setAppElement('#__next');

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [err, setErr] = useState('');

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
      setErr('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, err]);

  const subscribeToNewsletter = async () => {
    try {
      const response = await axios.post(
        'https://newsletter-mailchimp-production.up.railway.app/subscribe',
        {
          email,
          firstName,
          lastName,
          // phone,
        }
      );
      setMessage(response.data.message);
      const API_KEY = '662b29b742752b496ac82d7012b61d54-us7';
      const AUDIENCE_ID = '074d11784c';

      const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          // PHONE: phone,
        },
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${API_KEY}`,
        },
      };

      const mailchimpResponse = await axios.post(
        `https://us7.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        data,
        config
      );

      setMessage('Subscribed to newsletter successfully');
      localStorage.setItem('subscribed', true);
      setSubscribed(true);
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message);
      } else if (error.request) {
        setErr(error.request);
      } else {
        setErr(error.message);
      }
    }
  };

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
          {/* {message && <p className={styles.successMessage}>{message}</p>} */}
          {/* {err && <p className={styles.errorMessage}>{err}</p>} */}
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
              {/* <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                value={phone}
                autoComplete="Off"
                onChange={e => setPhone(e.target.value)}
                required
              /> */}
              <button type="submit">Subscribe</button>
            </form>
          )}
          {message && <p className={styles.success}>{message}</p>}
          {err && <p className={styles.error}>{err}</p>}
        </ReactModal>
      )}
    </>
  );
};

export default Modal;
