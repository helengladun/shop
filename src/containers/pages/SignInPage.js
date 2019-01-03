import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../modules/user/actions/index'
import { login } from "../../modules/user/effects/login";
import SignInPopup from "../../components/SignIn/SignInPopup";
import SignInFormContainer from '../../containers/forms/SignInForm';

class SignInPageContainer extends Component {

  getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };

  setTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };

  // logout = () => {
  //   localStorage.removeItem('token');
  //   this.props.userActions.signOut();
  // };

  render() {
    const { user, auth } = this.props;
    console.log('user', user);
    const authToken =  auth.token;

    if (authToken) {
      return <div>You have been already autorized <a href="/">Go to main page</a></div>
    }

    return (
        <SignInPopup errors={user.errors}>
          <SignInFormContainer onSubmit={login}/>
        </SignInPopup>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
    auth: state.auth,
    form: state.form
  }
};

const mapDispatchToProps = {
  login: login,
  ...userActions
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPageContainer);