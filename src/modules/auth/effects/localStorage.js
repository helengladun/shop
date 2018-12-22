import * as authActions from '../actions/index';

export const setTokenToLocalStorage = (token) => dispatch => {
  dispatch(authActions.setToken(token));
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => dispatch => {
  localStorage.getItem('token');
};

