import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import styles from 'styles/components/AdventureCard.module.scss';

const AdventureCard = ({ adventure }) =>
  <div className={styles.wrapper}>
    <div className={styles.thumb}>
      <div className={styles.price}>${adventure.price}</div>
      <div className={styles.like}><Icon name='heart' /></div>

      <div className={styles.guide}>
        <div className={styles.face}>
          <img src={adventure.avatar} />
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
  </div>;

// AdventureCard.propTypes = {
//   adventure: PropTypes.object.isRequired
// };

export default AdventureCard;