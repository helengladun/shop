const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

const removeTokenFormLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export default {
  setToken: setTokenToLocalStorage,
  getToken: getTokenFromLocalStorage,
  removeToken: removeTokenFormLocalStorage,
  clearStorage: clearLocalStorage
};