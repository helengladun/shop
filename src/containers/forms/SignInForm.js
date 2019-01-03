import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validate from '../../utils/signin/validate';

const renderInput = ({ input, label, type, meta: { touched, error }, ...custom}) => {
  return (
      <TextField
        label={label}
        error={touched && error}
        {...input}
        {...custom}
      >{touched && error && <span>{error}</span>}
      </TextField>
  );
};

let SignInForm = props => {
  console.log('props', props);
  const { handleSubmit, reset, error } = props;
  return (
      <form className="form form_signin" onSubmit={handleSubmit}>
        {error && <strong>{error}</strong>}
        <div>
            <Field
                name="email"
                component={renderInput}
                label="Your email"
                type="email"
            />
        </div>
        <div>
            <Field
                name="password"
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