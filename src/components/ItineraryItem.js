import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/components/ItineraryItem.module.scss';

const ItineraryItem = ({ step, item }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.step}>
        <span>{step}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.duration}>
          {item.duration}&nbsp;&nbsp;&bull;&nbsp;&nbsp;{item.difficulty}
        </div>
        {isOpen && <div className={styles.description}>{item.description}</div>}
      </div>
      <div onClick={() => toggleOpen(!isOpen)} className={styles.toggle}>
        <button>
          <Icon name={isOpen ? 'arrow-up-small' : 'arrow-down-small'} />
        </button>
      </div>
    </div>
  );
};

ItineraryItem.propTypes = {
  step: PropTypes.number,
  item: PropTypes.object,
};

export default ItineraryItem;
