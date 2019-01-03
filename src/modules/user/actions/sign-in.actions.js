export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const  SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_OUT = 'SIGN_OUT';

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
  signIn: true
});

export const signInFailed = errors => ({
  type: SIGN_IN_FAILED,
  signIn: false,
  errors: errors
});

export const signOut = () => ({
  type: SIGN_OUT,
  signIn: false,
});