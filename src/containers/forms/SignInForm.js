import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import validate from '../../utils/signin/validate';

const renderInput = ({ input, label, type, meta: { touched, error, warning }, ...custom}) => {
  return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && ((error && <div style={ {color: 'red'} }> {error} </div>) || (warning && <div style={ {color: 'red'} }> {warning} </div>))}
        </div>
      </div>
  );
};

let SignInForm = props => {
  const { handleSubmit, reset, error, userErrors } = props;
  return (
      <form className="form form_signin" onSubmit={handleSubmit}>
        {userErrors && <strong>{userErrors}</strong>}
        <div>
            <Field
                name="emailInput"
                component={renderInput}
                label="Your email"
                type="email"
            />
        </div>
        <div>
            <Field
                name="passwordInput"
                component={renderInput}
                label="Your password"
                type="password"
            />
        </div>
        <div className="form__btn-wrapper">
          <Button variant="contained" color="primary" type="submit">Sign in</Button>
          <Button variant="contained" color="secondary" type="button" onClick={reset}>Clear</Button>
        </div>
      </form>
  );
};

SignInForm = reduxForm({ form: 'signin', validate })(SignInForm);

export default connect()(SignInForm);