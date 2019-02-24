import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import styles from 'styles/components/GuideCard.module.scss';

const GuideCard = ({ guide }) => (
  <div className={styles.wrapper}>
    <div className={styles.thumb}>
      <img src={guide.thumbnail} alt='thumbnail' />
    </div>

    <div className={styles.description}>
      <div className={styles.location}>{guide.location}</div>

      <p>{guide.name}</p>

      <div className={styles.info}>
        <Icon name='star' />
        <span>{guide.rating}</span>
        <span>&bull;</span>
        <span>{guide.reviews} reviews</span>
        <span>&bull;</span>
        <span>{guide.adventures} adventures</span>
      </div>
    </div>
  </div>
);

GuideCard.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default GuideCard;
