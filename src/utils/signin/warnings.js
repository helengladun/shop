export default function(values) {
    const warnings = {};

  // if (
  //     values.password.length < 6
  // ) {
  //   errors.password = `Must be at least 6 symbols`
  // }

    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}