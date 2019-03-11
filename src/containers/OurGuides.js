/**
 * @file Holds the <OurGuides> container
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import GuideCard from 'components/GuideCard';
import Store from 'store';
import { fetchGuides } from 'store/actions';
import styles from 'styles/containers/CardList.module.scss';

const categories = ['All', 'Rafting', 'Hiking', 'Biking', 'Walking'];

const OurGuides = () => {
  const [first] = React.useState(4);

  /* Connect to the store */
  const { state, dispatch } = React.useContext(Store);
  const { guides } = state;

  React.useEffect(() => {
    if (guides.length === 0) {
      fetchGuides(first, dispatch);
    }
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <h3>Our Guides</h3>

        <ul className={styles.categories}>
          {categories.map((item, index) => (
            <React.Fragment key={index}>
              <li>{item}</li>
              <span>&nbsp;&bull;&nbsp;</span>
            </React.Fragment>
          ))}
        </ul>

        <hr className='short_hr' />

        <p>We have top guides from around the world. GreatGuides.com is about personal contact.</p>

        <div className={[`${styles.cards} ${styles.c4}`]}>
          {guides.map(item => (
            <GuideCard key={item.id} guide={item} />
          ))}

          {!guides.length && 'Loading...'}
        </div>
      </div>
    </div>
  );
};

export default OurGuides;
