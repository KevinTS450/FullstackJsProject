const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const setExp = (exp) => {
  localStorage.setItem("exp", exp);
};

const getExp = () => {
  return localStorage.getItem("exp");
};

const removeExp = () => {
  localStorage.removeItem("exp");
};

const handlerLoginSuccess = (res, exp) => {
  setToken(res);
  setExp(exp);
  window.location.href = "/Dashboard";
};

const isLoggedIn = () => {
  const token = getToken();
  const exp = getExp();

  if (token && exp) {
    // Check if the token is not expired
    const expirationDate = new Date(exp * 1000); // Convert expiration time to milliseconds
    if (expirationDate < Date.now()) {
      return true;
    } // Return true if the token is not expired
  }

  return false; // Return false if no token or expiration time
};
export const handlerService = {
  handlerLoginSuccess,
  setToken,
  getToken,
  removeToken,
  setExp,
  getExp,
  removeExp,
  isLoggedIn,
};
