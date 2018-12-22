import * as actions from '../actions/index';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return { ...state, token: action.token};
    default:
      return state;
  }
}