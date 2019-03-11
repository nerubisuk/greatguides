/**
 * @file Holds the <AdventureCard> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from 'styles/components/AdventureCard.module.scss';

/* Component definition */
const AdventureCard = ({ adventure }) => {
  const imageUrl = adventure.media[0]
    ? adventure.media[0].imageUrl
    : 'https://source.unsplash.com/1600x900/?nature';

  return (
    <Link to={`/adventures/${adventure.id}`} className={styles.wrapper}>
      <div className={styles.thumb}>
        <div className={styles.price}>${adventure.price}</div>
        <div className={styles.like}>
          <Icon name='heart' />
        </div>

        <div className={styles.guide}>
          <div className={styles.face}>
            <img src={adventure.guide.profilePictureUrl} alt='avatar' />
          </div>
          <p>{adventure.guide.fullName}</p>
          <div className={styles.info}>
            <Icon name='star' />
            <span>{adventure.reviews}</span>
            <span>&bull;</span>
            <span>{/*adventure.reviews*/} reviews</span>
          </div>
        </div>

        <img src={imageUrl} alt='thumbnail' />
      </div>

      <div className={styles.description}>
        <div className={styles.type}>{adventure.categories}</div>
        <p>{adventure.title}</p>
        <div className={styles.location}>
          <Icon name='location' />
          {adventure.address}
        </div>
      </div>
    </Link>
  );
};

/* Prop types definition */
AdventureCard.propTypes = {
  adventure: PropTypes.object.isRequired,
};

export default AdventureCard;
