/**
 * @file Holds the <HomeHeader> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/components/HomeHeader.module.scss';

/* Component definition */
const HomeHeader = ({ guides }) => (
  <div className={styles.wrapper}>
    <div className={styles.banner}>
      We are in early launch mode and on-boarding guides. If you are looking to book tours with one
      of our guides, please visit us back on March 1. We will be ready for tour inquiries.
    </div>

    <div className={styles.row}>
      <div className={styles.grid}>
        <div className={styles.grid_column}>
          <h1>Great Guides make for a truly great adventure</h1>
        </div>

        <div className={styles.grid_column}>
          <div className={styles.guides_faces}>
            <div className={styles.faces_wrapper}>
              {guides.items.map((item, index) => (
                <div key={index} className={styles.face}>
                  <img src={item.avatar} alt='face' />
                </div>
              ))}
            </div>
            <span>All Guides</span>
          </div>

          <hr className='short_hr' />

          <p>
            GreatGuides.com connects adventurous travellers with great guides. We just launched.
            Join us in building our community and find your adventure!
          </p>
        </div>
      </div>

      <div className={styles.find_adventure}>
        <div className={styles.input}>
          <Icon name='location' />
          <input type='text' placeholder='Location' />
        </div>
        <div className={styles.input}>
          <Icon name='season' />
          <input type='text' placeholder='Start date — Finish date' />
        </div>
        <button className={styles.find_button}>
          Find adventure
          <Icon name='arrow-right-big' />
        </button>
      </div>
    </div>
  </div>
);

HomeHeader.propTypes = {
  guides: PropTypes.object.isRequired,
};

export default HomeHeader;
