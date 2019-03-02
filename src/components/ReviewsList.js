/**
 * @file Holds the <ReviewsList> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import styles from 'styles/components/ReviewsList.module.scss';
import PropTypes from 'prop-types';

/* Component definition */
const ReviewsList = ({ reviews }) => (
  <div className={styles.wrapper}>
    <div className={styles.heading}>
      <h3>{reviews.count} Reviews</h3>
      <div className={styles.heading_rating}>
        <div className={styles.heading_stars}>
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
        </div>
        <div className={styles.heading_reviews_count}>{reviews.ratings}</div>
      </div>
    </div>

    {reviews.items.map((item, index) => (
      <div key={index} className={styles.review}>
        <div className={styles.user}>
          <div className={styles.user_face}>
            <img src={item.avatar} alt='avatar' />
          </div>
          <div className={styles.user_content}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        </div>
        <p>{item.content}</p>
      </div>
    ))}
  </div>
);

/* Prop types definition */
ReviewsList.propTypes = {
  reviews: PropTypes.object,
};

export default ReviewsList;
