import axios from "axios";
import config from "../../../config";
import * as authActions from '../../auth/actions/index';
import * as userActions from '../actions/index';

export const login = ({emailInput, passwordInput}) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`${config.REACT_APP_SIGN_IN_URL}`, {email: emailInput, password: passwordInput});
    const token = res.data.data;
    dispatch(userActions.signInSuccess());
    dispatch(authActions.setToken(token));
    localStorage.setItem('token', token);
    window.location.assign('/');
  } catch (e) {
    console.log(e);
  }

  // before each request
  // axios.interceptors.request.use(function (config) {
  //     const token = this.getTokenFromLocalStorage();
  //     config.headers = {
  //       'Authorization': `Bearer ${token}`
  //     };
  //     return config;
  // });
};