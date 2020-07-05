export const getTokenExpires = token => {
  if (!token) return 0;
  
  try {
    const [, payload] = token.split('.');
    const data = JSON.parse(atob(payload));
    const expires = data.exp;

    return expires;
  } catch (err) {
    return 0;
  }
};