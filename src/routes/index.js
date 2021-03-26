import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/course" exact component={Course} />
  </Switch>
);

export default Routes;
