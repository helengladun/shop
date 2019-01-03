import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound.js';
import SignInPage from "./containers/pages/SignInPage";
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={SignInPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
