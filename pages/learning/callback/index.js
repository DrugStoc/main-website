import React, { useEffect, useState } from 'react';
import Loading from 'components/loading';
import Learning from 'pages/learning';
import { useRouter } from 'next/router';

const GooglePage = () => {
  const [loading, setLoading] = useState(false);
  const [googleUserInfo, setGoogleUserInfo] = useState(null);

  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (router.pathname === '/learning/callback' && code) {
      handleAccessToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, googleUserInfo, router.pathname]);

  const handleAccessToken = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_OAUTH}/api/v2/auth/google_auth`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to obtain access token');
      }

      const data = await response.json();
      setGoogleUserInfo(data);

      if (data?.access_token) {
        localStorage.setItem('authToken', data?.access_token);
        localStorage.setItem('id_token', data?.id_token);
        localStorage.setItem(
          'name',
          `${data?.given_name} ${data?.family_name}`
        );
        localStorage.setItem('email', data?.email);
        localStorage.setItem('picture', data?.picture);
        localStorage.setItem('oauth_provider', 'google');
        router.push('/learning');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return <Learning />;
  }
};

export default GooglePage;
