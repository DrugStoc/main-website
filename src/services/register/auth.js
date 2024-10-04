export const registerUser = async userData => {
  const response = await fetch(
    'https://api.drugstoc.com/api/v2/auth/register-enduser',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  );

  return response.json();
};
