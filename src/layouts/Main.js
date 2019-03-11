/**
 * @file Holds the <Main> layout
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import PropTypes from 'prop-types';
import Store from 'store';

/* Component definition */
const Main = ({ page: Page, ...props }) => {
  const { state } = React.useContext(Store);
  props.mql = state.mql;

  return (
    <React.Fragment>
      {state.isMobileMenu && <MobileMenu {...props} />}
      <Header {...props} />
      <Page {...props} />
      <Footer />
    </React.Fragment>
  );
};

/* Prop types definition */
Main.propTypes = {
  page: PropTypes.func,
};

export default Main;
