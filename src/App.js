import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SignInPageContainer from './containers/pages/SignInPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignInPageContainer} />
    </Switch>
  );
};

export default App;
