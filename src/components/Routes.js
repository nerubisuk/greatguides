import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Callback from 'components/Callback';
import auth from 'utils/auth';
import MainLayout from 'layouts/Main';
import PropTypes from 'prop-types';

const handleAuthentication = (props) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props.history);
  }
};

/* Component definition */
const Routes = ({ childProps }) =>
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        component={props =>
          <MainLayout
            auth={auth}
            {...props}
            {...childProps}
          />
        } />

      <Route exact path='/callback' render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />;
      }} />
    </Switch>
  </Router>;

/* PropTypes definition */
Routes.propTypes = {
  childProps: PropTypes.object
};

export default Routes;