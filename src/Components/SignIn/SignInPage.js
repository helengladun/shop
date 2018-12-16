import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import config from '../../config';
import axios from "axios";

class SignInPage extends Component {

  submit = ({emailInput, passwordInput}) => {
    axios.post(`${config.REACT_APP_SIGN_IN_URL}`, {email: emailInput, password: passwordInput})
        .then(res => {
          console.log(res);
        });
  };

  render() {
    return <ContactForm onSubmit={this.submit}/>
  }
}

export default SignInPage;