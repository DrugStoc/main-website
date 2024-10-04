export const loginUser = async credentials => {
  const response = await fetch('https://api.drugstoc.com/api/v2/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
};
