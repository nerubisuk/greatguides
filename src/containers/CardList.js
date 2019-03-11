/**
 * @file Holds the <CardList> container
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/containers/CardList.module.scss';

/* Component definition */
const CardList = ({ children, bgColor, categories, isMore, columns }) => {
  const cardsArray = children.find(item => item.length);

  return (
    <div className={[`${styles.wrapper} ${styles[bgColor]}`]}>
      <div className={styles.row}>
        {children.find(item => item.type === 'h3')}

        <ul className={styles.categories}>
          {categories.map((item, index) => (
            <React.Fragment key={index}>
              <li>{item}</li>
              <span>&nbsp;&bull;&nbsp;</span>
            </React.Fragment>
          ))}
        </ul>

        <hr className='short_hr' />

        {children.filter(item => item.type === 'p')}

        <div className={[`${styles.cards} ${styles[columns]}`]}>
          {cardsArray && cardsArray.map(item => item)}
        </div>

        {isMore && (
          <div className={styles.see_more}>
            <span>See more</span>
            <Icon name='see-more' />
          </div>
        )}
      </div>
    </div>
  );
};

/* Prop types definition */
CardList.propTypes = {
  children: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  bgColor: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
  isMore: PropTypes.any,
};

export default CardList;
