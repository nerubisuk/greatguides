import React from 'react';
import Icon from 'components/Icon';
import PhotoSlider from 'components/PhotoSlider';
import AdventureCard from 'components/AdventureCard';
import DepartureDates from 'components/DepartureDates';
import TourDescription from 'components/TourDescription';
import CarryThings from 'components/CarryThings';
import BookRequest from 'components/BookRequest';
import styles from 'styles/pages/Adventure.module.scss';
import adventures from 'mocks/adventures.json';

const adventure = adventures[0],
  ratings = [1, 1, 1, 1, 1];

const Adventure = () => (
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
          {ratings.map((item, index) => (
            <Icon key={index} name='star' />
          ))}
          <span>{adventure.ratings}</span>
        </div>
      </section>
    </div>

    {/* PhotoSlider */}
    <PhotoSlider photos={adventure.photos} />

    {/* Departure dates */}
    <div className={styles.row}>
      <div className={styles.column}>
        <DepartureDates dates={adventure.dates} />

        {/* Tour description */}
        <TourDescription description={adventure.description} />

        {/* Carry */}
        <CarryThings carry={adventure.carry} />

        <div className={styles.col_1_2}>
          {/* Included */}
          <div className={styles.included_excluded}>
            <h3>Included</h3>
            <ul>
              {adventure.included.map((item, index) => (
                <li key={index}>
                  <Icon name='plus' className={styles.icon_plus} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className={styles.included_excluded}>
            <h3>Excluded</h3>
            <ul>
              {adventure.excluded.map((item, index) => (
                <li key={index}>
                  <Icon name='minus' className={styles.icon_minus} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <BookRequest guide={adventure.guide} />
      </div>
    </div>

    {/* Similar adventures */}
    <div className={styles.similar}>
      <h2>Similar Adventures</h2>
      <section>
        {adventure.similar.map((item, index) => (
          <AdventureCard key={index} adventure={item} />
        ))}
      </section>
    </div>
  </div>
);

export default Adventure;
