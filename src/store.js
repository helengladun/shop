import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './modules/user/reducers/index';
import auth from './modules/auth/reducers/token';
import thunk from 'redux-thunk';

// const customMiddleware = store => next => action => {
//   console.log('here=> ', next(action));
// };

const rootReducer = combineReducers({
  user,
  auth,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));

export default store;