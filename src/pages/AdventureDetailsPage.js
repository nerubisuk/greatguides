/**
 * @file Holds the <AdventurePage> page
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import PhotoSlider from 'components/PhotoSlider';
import AdventureCard from 'components/AdventureCard';
import DepartureDates from 'components/DepartureDates';
import TourDescription from 'components/TourDescription';
import CarryThings from 'components/CarryThings';
import BookRequest from 'components/BookRequest';
import TourOnTheMap from 'components/TourOnTheMap';
import PropTypes from 'prop-types';
import styles from 'styles/pages/AdventureDetailsPage.module.scss';
import { connect } from 'react-redux';
import { getAdventureById } from 'store/actions';
import data from 'mocks/adventures';

/* Component definition */
class AdventureDetailsPage extends React.Component {
  componentDidMount() {
    this.props.getAdventureById({
      id: 'cjn05y8bfq7el0b48w4mleu8x',
    });
  }

  render() {
    const { adventure, mql } = this.props;

    return (
      <main className={styles.wrapper}>
        {adventure && (
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
                <DepartureDates dates={data[0].dates} />

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

                {/* Tour on the map */}
                <TourOnTheMap />
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
                  {data[0].similar.map((item, index) => (
                    <AdventureCard key={index} adventure={item} />
                  ))}
                </section>
              }
            </div>
          </React.Fragment>
        )}
      </main>
    );
  }
}

/* Prop types definition */
AdventureDetailsPage.propTypes = {
  adventure: PropTypes.object,
  mql: PropTypes.string.isRequired,
  getAdventureById: PropTypes.func,
};

/* Redux state mapping */
const mapStateToProps = state => ({
  adventure: state.adventures.find(item => item.id === 'cjn05y8bfq7el0b48w4mleu8x'),
});

/* Redux actions mapping */
const mapDispatchToProps = { getAdventureById };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureDetailsPage);
