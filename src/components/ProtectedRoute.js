import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/learning');
    }
  }, [token]);

  return token ? children : null;
};

export default ProtectedRoute;
