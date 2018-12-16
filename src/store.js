import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './modules/user';

const rootReducer = combineReducers({
  user,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware()));

export default store;