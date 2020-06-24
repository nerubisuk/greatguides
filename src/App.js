/**
 * @file Holds the <App> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from 'components/Routes';
import auth from 'utils/auth';
import PropTypes from 'prop-types';

const App = ({ history }) => {
  React.useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      auth.renewSession(history);
    }
  }, []);

  return (
    <div className='App'>
      <Routes />
    </div>
  );
};

/* PropTypes definition */
App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
