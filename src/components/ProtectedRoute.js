import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!token) {
      router.push('/learning');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return token ? children : null;
};

export default ProtectedRoute;
