import React from 'react';
import styles from 'styles/components/MapBox.module.scss';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class MapBox extends React.Component {
  state = {
    map: null,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'mapBoxContainer',
      style: 'mapbox://styles/onelastjedi/cjsjdze6e3m331fny2b6hk595',
      center: [-75.911136, 42.097267],
      zoom: 14.1,
    });

    this.setState({
      map,
    });
  }

  render() {
    return <div className={styles.wrapper} id='mapBoxContainer' />;
  }
}

export default MapBox;
