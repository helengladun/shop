import React, { Component } from 'react';
import ContactForm from "../../Containers/SignIn/ContactFormContainer";
import config from '../../config';
import axios from "axios";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      token: null
    });
  }

  setTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
    this.setState({
      token: token
    });
  };

  getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  submit = ({emailInput, passwordInput}) => {
    axios.post(`${config.REACT_APP_SIGN_IN_URL}`, {email: emailInput, password: passwordInput})
        .then(res => {
          const token = res.data.data;
          this.setTokenToLocalStorage(token);
          window.location.assign('/');
        });
  };

  render() {
    // const token = this.state.token;
    const token = 'wlkfjdsl';
    console.log(token);
    return !token && <ContactForm onSubmit={this.submit}/>
  }
}

export default SignInPage;