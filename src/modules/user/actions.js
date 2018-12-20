import { userTypes } from './';

const signInSuccess = () => ({
  type: userTypes.SIGN_IN_SUCCESS,
  value: true,
});

const signInFailed = (error) => ({
  type: userTypes.SIGN_IN_FAILED,
  value: error,
});

const signOut = () => ({
  type: userTypes.SIGN_OUT,
  value: true
});

export default { signInSuccess, signInFailed, signOut };