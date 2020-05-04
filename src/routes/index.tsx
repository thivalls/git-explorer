import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} name="dashboard" />
      <Route
        path="/repository/:repository+"
        component={Repository}
        name="repository"
      />
    </Switch>
  );
};

export default Routes;
