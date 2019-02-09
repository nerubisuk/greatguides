/**
 * @file Holds the <Main> layout
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Header from 'components/Header';

/* Component definition */
const Main = ({ ...props }) =>
  <>
    <Header {...props} />
  </>;

export default Main;