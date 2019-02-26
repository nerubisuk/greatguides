/**
 * @file Holds the <TourOnTheMap> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import MapBox from 'components/MapBox';
import styles from 'styles/components/TourOnTheMap.module.scss';

/* Component definition */
const TourOnTheMap = () => (
  <div className={styles.wrapper}>
    <h3>Tour on the map</h3>
    <MapBox />
  </div>
);

export default TourOnTheMap;
