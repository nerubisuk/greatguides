/**
 * @file Holds the <App> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from 'components/Routes';
import matchMedia from 'utils/matchMedia';
import auth from 'utils/auth';
import PropTypes from 'prop-types';

/* Component definition */
class App extends React.Component {
  state = {
    mql: null,
  };

  updateView = () => {
    this.setState({ mql: matchMedia() });
  };

  componentDidMount() {
    this.updateView();
    window.addEventListener('resize', this.updateView);

    this.renewAuthSession();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateView);
  }

  renewAuthSession() {
    const { history } = this.props;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      auth.renewSession(history);
    }
  }

  render() {
    return (
      this.state.mql && (
        <div className="App">
          <Routes childProps={{ mql: this.state.mql }} />
        </div>
      )
    );
  }
}

/* PropTypes definition */
App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
