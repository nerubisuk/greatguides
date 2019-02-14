/**
 * @file Holds the <BookRequest> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/components/BookRequest.module.scss';

/* Component definition */
class BookRequest extends React.Component {
  render() {
    const { guide } = this.props;

    return (
      <div className={styles.wrapper}>
        <header>
          <div className={styles.avatar}>
            <img src={guide.avatar} alt='avatar' />
          </div>
          <div className={styles.guide}>
            <span>{guide.location}</span>
            <h4>{guide.name}</h4>
            <p>
              <Icon name='star' />
              &nbsp;{guide.rating}
              &nbsp;&bull;&nbsp;{guide.reviews}&nbsp;reviews &bull;&nbsp;{guide.adventures}
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
            Hi Andrew. I would like to book adventure «Trek to Ade Medhanealem village».
          </div>
          <button>Request to book</button>
        </div>
      </div>
    );
  }
}

/* PropTypes definition */
BookRequest.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default BookRequest;
