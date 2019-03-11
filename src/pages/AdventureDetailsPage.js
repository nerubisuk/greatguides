/**
 * @file Holds the <AdventurePage> page
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import PhotoSlider from 'components/PhotoSlider';
// import AdventureCard from 'components/AdventureCard';
import DepartureDates from 'components/DepartureDates';
import TourDescription from 'components/TourDescription';
import CarryThings from 'components/CarryThings';
import BookRequest from 'components/BookRequest';
import TourOnTheMap from 'components/TourOnTheMap';
import ReviewsList from 'components/ReviewsList';
import Itinenary from 'components/Itinerary';
import PropTypes from 'prop-types';
import styles from 'styles/pages/AdventureDetailsPage.module.scss';
import Store from 'store';
import { fetchAdventureById } from 'store/actions';
import mockData from 'mocks/adventures';

/* Component definition */
const AdventureDetailsPage = ({ match }) => {
  /* Connect to the store */
  const { state, dispatch } = React.useContext(Store);
  const { adventures, mql } = state;

  const adventure = adventures.find(item => item.id === match.params.id);

  /**
   * React useEffect Hook
   * @see {@link https://reactjs.org/docs/hooks-effect.html|Effect Hook}
   */
  React.useEffect(() => {
    window.scrollTo(0, 0);
    !adventure && fetchAdventureById(state, match.params.id, dispatch);
  }, [state]);

  if (!adventure) return 'Loading...';

  return (
    <main className={styles.wrapper}>
      <React.Fragment>
        {/* Header */}
        <div className={styles.header}>
          <section>
            <div className={styles.type}>{adventure.categories}</div>
            <h1>{adventure.title}</h1>
            <div className={styles.location}>
              <Icon name='location' />
              {adventure.address}
            </div>
          </section>
          <section>
            <hr />
            <div className={styles.price}>
              ${adventure.price}&nbsp;
              <span>tour price</span>
            </div>
            <div className={styles.ratings}>
              {[0, 0, 0, 0, 0].map((item, index) => (
                <Icon key={index} name='star' />
              ))}
              <span>{adventure.reviews}</span>
            </div>
          </section>
        </div>

        {/* PhotoSlider */}
        <PhotoSlider photos={adventure.media} />

        <div className={styles.row}>
          <div className={styles.column}>
            {/* Departure dates */}
            <DepartureDates dates={adventure.dates} />

            {/* Tour description */}
            <TourDescription
              description={adventure.description}
              specs={{
                distance: adventure.distance,
                duration: adventure.durationInDays,
                season: adventure.season,
                minimum_age: adventure.minimumAge,
              }}
            />

            {/* Carry */}
            <CarryThings carry={adventure.thingsToCarryList} />

            <div className={styles.col_1_2}>
              {/* Included */}
              <div className={styles.included_excluded}>
                <h3>Included</h3>
                <ul>
                  {adventure.inclusionList.map((item, index) => (
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
                  {adventure.exclusionList.map((item, index) => (
                    <li key={index}>
                      <Icon name='minus' className={styles.icon_minus} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinenary */}
            <Itinenary itinerary={mockData[0].itinerary} />

            {/* Tour on the map */}
            <TourOnTheMap />

            {/* Reviews */}
            <ReviewsList reviews={mockData[0].reviews} />
          </div>

          {mql === 'desktop' && (
            <div className={styles.column}>
              <BookRequest guide={adventure.guide} />
            </div>
          )}
        </div>

        {/* Similar adventures */}
        <div className={styles.similar}>
          <h2>Similar Adventures</h2>
          {
            <section>
              {/* mockData[0].similar.map((item, index) => (
                <AdventureCard key={index} adventure={item} />
              )) */}
            </section>
          }
        </div>
      </React.Fragment>
    </main>
  );
};

/* Prop types definition */
AdventureDetailsPage.propTypes = {
  match: PropTypes.object,
};

export default AdventureDetailsPage;
