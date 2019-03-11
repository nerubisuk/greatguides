import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import auth from 'utils/auth';
import Callback from 'components/Callback';
import MainLayout from 'layouts/Main';
/* Pages */
import HomePage from 'pages/HomePage';
import AdventureDetailsPage from 'pages/AdventureDetailsPage';

const handleAuthentication = props => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props.history);
  }
};

/* Component definition */
const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        component={props => <MainLayout auth={auth} page={HomePage} {...props} />}
      />

      <Route
        exact
        path='/adventures/:id'
        component={props => <MainLayout auth={auth} page={AdventureDetailsPage} {...props} />}
      />

      <Route
        exact
        path='/callback'
        render={props => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
    </Switch>
  </Router>
);

/* PropTypes definition */
Routes.propTypes = {
  childProps: PropTypes.object,
};

export default Routes;
