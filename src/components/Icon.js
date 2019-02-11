/**
 * @file Holds the <Icon> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import "-!svg-sprite-loader!../assets/icons.svg";

/* Component definition */
const Icon = ({ className, name }) => (
  <svg className={[`icon-${name} ${className ? className : ''}`]}>
    <use xlinkHref={`#icons_${name}`} />
  </svg>
);

/* PropTypes definition */
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
