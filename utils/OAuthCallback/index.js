const handleGoogleCallback = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENTID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`;
};

export { handleGoogleCallback };
