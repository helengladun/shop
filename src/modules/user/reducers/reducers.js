import * as actions from '../actions/index';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return { ...state, signIn: action.signIn, token: action.token};
    case actions.SIGN_IN_FAILED:
      return { ...state, signIn: action.signIn};
    case actions.SIGN_OUT:
      return { ...state, signIn: action.signIn};
    default:
      return state;
  }
}