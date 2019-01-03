export default function(values) {
  const errors = {};
  const requiredFields = [
      'email',
      'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  if (
      values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  // if (
  //     values.password.length < 6
  // ) {
  //   errors.password = `Must be at least 6 symbols`
  // }

  console.log(errors);
  return errors;
}
