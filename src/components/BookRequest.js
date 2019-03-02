/**
 * @file Holds the <BookRequest> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import styles from 'styles/components/BookRequest.module.scss';

/* Component definition */
const BookRequest = ({ guide }) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.avatar}>
          <img src={guide.profilePictureUrl} alt='avatar' />
        </div>
        <div className={styles.guide}>
          <span>
            {guide.city}, {guide.country}
          </span>
          <h4>{guide.fullName}</h4>
          <p>
            <Icon name='star' />
            &nbsp;{guide.rating}
            &nbsp;&bull;&nbsp;{guide.reviews}&nbsp;reviews &bull;&nbsp;{guide.adventures.length}
            &nbsp;adventures
          </p>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.input}>
          <Icon name='season' />
          Departure date
          <Icon name='arrow-down' className={styles.arrow_down} />
        </div>
        <div className={styles.input}>
          <Icon name='persons' />
          Number of persons
          <Icon name='arrow-down' className={styles.arrow_down} />
        </div>
        <div className={styles.input}>
          <Icon name='messages' />
          Hi {guide.firstName}. I would like to book adventure «Trek to Ade Medhanealem village».
        </div>
        <button>Request to book</button>
        <div className={styles.terms}>
          By clicking «Request to Book» I agree to <Link to='/'>GreatGuide’s booking terms</Link>
        </div>
      </div>
    </div>
  );
};

/* PropTypes definition */
BookRequest.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default BookRequest;
