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

      <button className={styles.find_button}>
        Find adventure
        <Icon name='arrow-right-big' />
      </button>
    </div>
  </div>
);

HomeHeader.propTypes = {
  guides: PropTypes.object.isRequired,
};

export default HomeHeader;
