import React from 'react';
import Icon from 'components/Icon';
import PhotoSlider from 'components/PhotoSlider';
import styles from 'styles/pages/Adventure.module.scss';
import adventures from 'mocks/adventures.json';

const adventure = adventures[0],
  ratings = [1, 1, 1, 1, 1];


const Adventure = () =>   
  <div className={styles.wrapper}>
    
    {/* Header */}
    <div className={styles.header}>
      <section>
        <div className={styles.type}>{adventure.type}</div>
        <h1>{adventure.title}</h1>
        <div className={styles.location}>
          <Icon name='location' />
          {adventure.location}
        </div>
      </section>
      <section>
        <hr />
        <div className={styles.price}>
          ${adventure.price}&nbsp;
          <span>tour price</span>
        </div>
        <div className={styles.ratings}>
          {ratings.map((item, index) => <Icon key={index} name='star' />)}
          <span>{adventure.ratings}</span>
        </div>
      </section>
    </div>

    {/* PhotoSlider */}
    <PhotoSlider photos={adventure.photos} />
  </div>;

export default Adventure;