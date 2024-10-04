import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = data => {
    if (data && data.token) {
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('authToken', data.token);
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    router.push('/learning');
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, setIsModalOpen, isModalOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
