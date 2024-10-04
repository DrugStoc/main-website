import SignInForm from 'components/SigninForm';
import SignUpForm from 'components/SignupForm';
import { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return !isOpen ? null : (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          <span style={styles.cancel}>&times;</span>
        </button>
        <div style={styles.toggleButtons}>
          <button
            onClick={() => setIsSignUp(true)}
            style={
              isSignUp
                ? {
                    ...styles.activeTab,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }
                : styles.inactiveTab
            }
          >
            Sign up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            style={
              !isSignUp
                ? {
                    ...styles.activeTab,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }
                : styles.inactiveTab
            }
          >
            Sign in
          </button>
        </div>

        {isSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000000000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    maxWidth: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
  cancel: {
    position: 'relative',
    top: -3,
  },
  toggleButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  activeTab: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    outline: 'none',
  },
  inactiveTab: {
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    outline: 'none',
  },
};

export default AuthModal;
