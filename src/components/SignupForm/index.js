import { useState } from 'react';
import { registerUser } from 'services/register/auth';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
    };

    try {
      await registerUser(userData);
      setMessage('Registration Successful');
    } catch (err) {
      setError('Registration failed. Please try again.');
      setTimeout(() => {
        setError(null);
      }, 3000);
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
        type="text"
        placeholder="First name"
        style={styles.input}
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last name"
        style={styles.input}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email address"
        style={styles.input}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        style={styles.input}
        value={phone}
        onChange={e => setPhone(e.target.value)}
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
        {loading ? 'Registering...' : 'Sign up'}
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
