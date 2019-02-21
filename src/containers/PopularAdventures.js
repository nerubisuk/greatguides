/**
 * @file Holds the <PopularAdventures> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import AdventureCard from 'components/AdventureCard';
import styles from 'styles/containers/PopularAdventures.module.scss';

/*Component definition */
const PopularAdventures = ({ adventures }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Popular Adventures</h3>

      <ul className={styles.categories}>
        {adventures.categories.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item}</li>
            <span>&nbsp;&bull;&nbsp;</span>
          </React.Fragment>
        ))}
      </ul>

      <hr className='short_hr' />

      <p>
        Our guides have a lot of greate adventures in different categories like Rafting, Hiking,
        Biking and Walking.
      </p>

      {adventures.similar.map((item, index) => (
        <AdventureCard key={index} adventure={item} />
      ))}

      <div className={styles.see_more}>
        <span>See more</span>
        <Icon name='see-more' />
      </div>
    </div>
  );
};

/* Prop types definition */
PopularAdventures.propTypes = {
  adventures: PropTypes.object.isRequired,
};

export default PopularAdventures;
