/**
 * @file Holds the <AdventureCard> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import styles from 'styles/components/AdventureCard.module.scss';

/* Component definition */
const AdventureCard = ({ adventure }) => (
  <div className={styles.wrapper}>
    <div className={styles.thumb}>
      <div className={styles.price}>${adventure.price}</div>
      <div className={styles.like}>
        <Icon name='heart' />
      </div>

      <div className={styles.guide}>
        <div className={styles.face}>
          <img src={adventure.avatar} alt='avatar' />
        </div>
        <p>{adventure.guide}</p>
        <div className={styles.info}>
          <Icon name='star' />
          <span>{adventure.ratings.substring(0, 3)}</span>
          <span>&bull;</span>
          <span>{adventure.reviews} reviews</span>
        </div>
      </div>

      <img src={adventure.thumbnail} alt='thumbnail' />
    </div>

    <div className={styles.description}>
      <div className={styles.type}>{adventure.type}</div>
      <p>{adventure.title}</p>
      <div className={styles.location}>
        <Icon name='location' />
        {adventure.location}
      </div>
    </div>
  </div>
);

/* Prop types definition */
AdventureCard.propTypes = {
  adventure: PropTypes.object.isRequired,
};

export default AdventureCard;
