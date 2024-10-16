import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react';
import { loginUser } from 'services/login';
import { handleGoogleCallback } from 'utils/OAuthCallback';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { login } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const userData = {
      email,
      password,
    };

    try {
      const res = await loginUser(userData);
      if (res.token) {
        login(res);
        localStorage.setItem('authToken', res.token);
        setMessage('Login Successful');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setError('Invalid token received.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleClickButton = () => {
    handleGoogleCallback();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.signin}>Sign in</h2>
      {/* <button style={styles.authButton}>
        Log in with Drugstoc Credentials
      </button>
      <button style={styles.googleButton} onClick={handleClickButton}>
        Sign up with Google
      </button>

      <div style={styles.orDivider}>
        <span style={styles.or}>OR</span>
        <div style={styles.divider}></div>
      </div> */}

      <input
        type="email"
        placeholder="Email address"
        style={styles.input}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      {error && <p style={styles.errorText}>{error}</p>}
      {message && <p style={styles.successText}>{message}</p>}
      <button type="submit" style={styles.submitButton} disabled={loading}>
        {loading ? 'Loading...' : 'Sign in'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  signin: {
    textAlign: 'center',
  },
  authButton: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  googleButton: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: '#fff',
    cursor: 'pointer',
  },
  orDivider: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '14px',
    color: '#aaa',
    position: 'relative',
    marginTop: 30,
  },
  or: {
    backgroundColor: '#fff',
    padding: '5px',
    width: '50px',
    display: 'block',
    marginInline: 'auto',
    position: 'relative',
    zIndex: 2,
    top: '-5px',
  },
  divider: {
    position: 'absolute',
    border: 'none',
    borderBottom: '1px solid #aaa',
    top: '10px',
    width: '100%',
    marginInline: 'auto',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#4c70d6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    borderRadius: 10,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
  },
  successText: {
    color: 'green',
  },
};

export default SignInForm;
