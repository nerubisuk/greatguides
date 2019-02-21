/**
 * @file Holds the <HomePage> page
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from 'styles/pages/HomePage.module.scss';
import PopularAdventures from 'containers/PopularAdventures';
import SubscribeToNewsletter from 'components/SubscribeToNewsletter';
import data from 'mocks/home.json';

/* Component definition */
class HomePage extends React.Component {
  render() {
    return (
      <main className={styles.wrapper}>
        <PopularAdventures adventures={data.popular} />
        <SubscribeToNewsletter />
      </main>
    );
  }
}

export default HomePage;
