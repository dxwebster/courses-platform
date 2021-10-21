/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './config/ReactotronConfig';
import AppProvider from './providers/AppProvider';

import history from './services/history';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Course from './pages/Dashboard/components/Course';

import GlobalStyle from './styles/global';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppProvider>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/course" exact component={Course} />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
