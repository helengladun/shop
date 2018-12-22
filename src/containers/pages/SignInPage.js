import React, { Component } from 'react';
import ContactForm from "../forms/ContactFormContainer";
import {connect} from 'react-redux';
import axios from "axios";
import config from "../../config";
import * as userActions from '../../modules/user/actions/index'
import { login } from "../../modules/user/effects/login";

class SignInPageContainer extends Component {

  getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };

  // logout = () => {
  //   localStorage.removeItem('token');
  //   this.props.userActions.signOut();
  // };

  render() {
    const { login } = this.props;
    const authToken = this.getTokenFromLocalStorage('token');

    if (authToken) {
      return <div>You have been already autorized <a href="/">Go to main page</a></div>
    }

    return <ContactForm onSubmit={login}/>
  }
}

const MapStateToProps = (state) => {
  return {
    signIn: state.signIn,
    errors: state.errors,
    token: state.token,
    form: state.form
  }
};

const MapDispatchToProps = {
  login: login,
  ...userActions
};

export default connect(MapStateToProps, MapDispatchToProps)(SignInPageContainer);