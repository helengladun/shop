import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../modules/user/actions/index'
import { login } from "../../modules/user/effects/login";
import SignInPopup from "../../components/SignIn/SignInPopup";
import SignInForm from '../../containers/forms/SignInForm';

class SignInPage extends Component {

  getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };

  // logout = () => {
  //   localStorage.removeItem('token');
  //   this.props.userActions.signOut();
  // };

  render() {
    const { user, login, auth } = this.props;
    const authToken = this.getTokenFromLocalStorage();
    let popupContent = <SignInForm onSubmit={login} userErrors={user.errors}/>;

    console.log(authToken);
    if (authToken) {
       popupContent = <div>You have been already autorized <a href="/">Go to main page</a></div>
    }

    if (auth.token) {
      popupContent = <div>You have been successfully autorized</div>
    }

    return (
        <SignInPopup>
          {popupContent}
        </SignInPopup>
    )
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);