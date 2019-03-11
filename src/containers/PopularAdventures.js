/**
 * @file Holds the <PopularAdventures> container
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import AdventureCard from 'components/AdventureCard';
import Store from 'store';
import { fetchAdventures } from 'store/actions';
import styles from 'styles/containers/CardList.module.scss';

const categories = ['All', 'Rafting', 'Hiking', 'Biking', 'Walking'];

const PopularAdventures = () => {
  const [first, setFirst] = React.useState(6);

  /* Connect to the store */
  const { state, dispatch } = React.useContext(Store);
  const { adventures } = state;

  const isLoading = adventures.length < first;

  React.useEffect(() => {
    if (adventures.length < first) {
      fetchAdventures(first, dispatch);
    }
  }, [first]);

  const loadMore = () => {
    setFirst(first + 3);
  };

  return (
    <div className={[`${styles.wrapper} ${styles.grey}`]}>
      <div className={styles.row}>
        <h3>Popular Adventures</h3>

        <ul className={styles.categories}>
          {categories.map((item, index) => (
            <React.Fragment key={index}>
              <li>{item}</li>
              <span>&nbsp;&bull;&nbsp;</span>
            </React.Fragment>
          ))}
        </ul>

        <hr className='short_hr' />

        <p>
          Our guides have a lot of greate adventures in different categories like Rafting, Hiking,
          Biking and Walking.
        </p>

        <div className={[`${styles.cards} ${styles.c3}`]}>
          {adventures.map(item => (
            <AdventureCard key={item.id} adventure={item} />
          ))}

          {isLoading && 'Loading...'}
        </div>

        <div className={styles.see_more} onClick={loadMore}>
          <span>See more</span>
          <Icon name='see-more' />
        </div>
      </div>
    </div>
  );
};

export default PopularAdventures;
