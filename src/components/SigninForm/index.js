import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react';
import { loginUser } from 'services/login';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const [isToken, setIsToken] = useState(false);

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
      setMessage('Login Successful');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      login(res);
      setIsToken(true);
      localStorage.setItem(isToken, true);
    } catch (err) {
      setError('Login failed. Please try again.');
      setTimeout(() => {
        setError(null);
      }, 3000);
      localStorage.setItem(isToken, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.signin}>Sign up</h2>
      <button style={styles.authButton}>
        Log in with Drugstoc Credentials
      </button>
      <button style={styles.googleButton}>Sign up with Google</button>

      <div style={styles.orDivider}>
        <span style={styles.or}>OR</span>
        <div style={styles.divider}></div>
      </div>

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

export default SignUpForm;
