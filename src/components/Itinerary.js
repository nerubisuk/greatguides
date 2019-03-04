import React from 'react';
import PropTypes from 'prop-types';
import ItineraryItem from 'components/ItineraryItem';
import styles from 'styles/components/Itinerary.module.scss';

/* Container definition */
const Itinerary = ({ itinerary }) => (
  <div className={styles.wrapper}>
    <h3>Itinerary</h3>

    {itinerary.map((item, index) => (
      <ItineraryItem key={index} step={index + 1} item={item} />
    ))}
  </div>
);

Itinerary.propTypes = {
  itinerary: PropTypes.array,
};

export default Itinerary;
