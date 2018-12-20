import { userTypes } from './';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return { ...state, signIn: action.value};
    case userTypes.SIGN_IN_FAILED:
      return { ...state, signed: action.value};
    case userTypes.SIGN_OUT:
      return defaultState;
    default:
      return state;
  }
}