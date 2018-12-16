import React from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const SpanError = styled.span`
  color: red;
  display: block;
`;

const validate = values => {
  const errors = {};
  if (!values.emailInput) {
    errors.emailInput = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Incorrect email address';
  }

  if (!values.passwordInput) {
    errors.passwordInput = 'Required';
  } else if (values.passwordInput.length < 6) {
    errors.passwordInput = 'Must be at least 6 symbols';
  }

  return errors
};

const renderInput = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => {
  return (
      <div>
        <input {...input} type={type}/>
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
  );
};

let ContactForm = props => {
  console.log(props);
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailInput">Your email
          <Field name="emailInput" component={renderInput} type="email"/>
        </label>
      </div>
      <div>
        <label htmlFor="passwordInput">Your password
          <Field name="passwordInput" component={renderInput} type="password"/>
        </label>
      </div>
      <button type="submit">Sign in</button>
      <button type="button" onClick={reset}>Clear</button>
    </form>
  );
};

ContactForm = reduxForm({ form: 'signin', validate })(ContactForm);

export default connect()(ContactForm);