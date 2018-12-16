import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import SignInPage from './Components/SignIn/SignInPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignInPage} />
    </Switch>
  );
};

export default App;
