/**
 * @file Holds the <ReadMoreTextBlock> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import styles from 'styles/components/ReadMoreTextBlock.module.scss';

/* Component definition */
const ReadMoreTextBlock = ({ children, bgColor, isReverseOrder }) => {
  return (
    <div className={[`${styles.wrapper} ${styles[bgColor]}`]}>
      <div className={[`${styles.row} ${isReverseOrder ? styles.revers : ''}`]}>
        <div className={styles.column}>
          {children.find(item => item.type === 'h3')}

          <hr className='short_hr' />

          {children.filter(item => item.type === 'p')}

          <div className={styles.read_more}>
            <span>Read more</span>
            <Icon name={`read-more${bgColor !== 'grey' ? '-grey' : ''}`} />
          </div>
        </div>

        <div className={styles.column}>{children.find(item => item.type === 'img')}</div>
      </div>
    </div>
  );
};

/* Prop types definition */
ReadMoreTextBlock.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
  isReverseOrder: PropTypes.any,
};

export default ReadMoreTextBlock;
