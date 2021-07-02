import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';

export default function Routes({ configs }: any) {
  return (
    <Switch>
      <Route path="/" exact component={Login} configs={configs} />
      <Route path="/dashboard" exact component={Dashboard} configs={configs} />
      <Route path="/login" exact component={Login} configs={configs} />
      <Route path="/course" exact component={Course} configs={configs} />
    </Switch>
  );
}

Routes.propTypes = {
  configs: PropTypes.objectOf(PropTypes.string).isRequired,
};
