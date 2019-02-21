/**
 * @file Holds the <HomePage> page
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from 'styles/pages/HomePage.module.scss';
import PopularAdventures from 'containers/PopularAdventures';
import SubscribeToNewsletter from 'components/SubscribeToNewsletter';
import ReadMoreTextBlock from 'components/ReadMoreTextBlock';
import data from 'mocks/home.json';

/* Component definition */
class HomePage extends React.Component {
  render() {
    return (
      <main className={styles.wrapper}>
        <PopularAdventures adventures={data.popular} />
        <ReadMoreTextBlock bgColor='grey'>
          <h3>About us</h3>
          <p>
            We are GreatGuides.com, an adventure travel site for the adventure seeker to meet and
            journey with inspirational guides. We believe in making adventure travel a personal
            connection between the adventurer and their guide.
          </p>
          <p>
            Our mission is to make the adventure travel experience transparent and accessible to
            everyone. We help guides launch sustainable and independent ventures with no upfront
            costs. Our goal is to build an adventure marketplace that benefits the guide, the local
            community and provides the adventurer a unique experience.
          </p>
          <img src='https://source.unsplash.com/600x800/?people' />
        </ReadMoreTextBlock>
        <ReadMoreTextBlock bgColor='grey'>
          <h3>How it works?</h3>
          <p>
            Guides can set up their profile and are approved based on their level of experience,
            their cultural and regional knowledge and past reviews. We recommend all guides follow
            our guide standards document. Once approved, guides remain in control of the itineraries
            they create. They work out the trip schedule they want us to promote and the price they
            wish to charge for their services, leaving GreatGuides.com to take care of admin behind
            the scenes.
          </p>
          <img src='https://source.unsplash.com/600x800/?nature' />
        </ReadMoreTextBlock>
        <ReadMoreTextBlock bgColor='white'>
          <h3>Why we are different</h3>
          <p>
            GreatGuides.com facilitates direct bookings between the adventure traveller and the
            guide ensuring an independent rather than a corporate experience. Until now, that’s been
            difficult to achieve – setting up a website and paying for marketing doesn’t come cheap.
            Plus, the few independent guides that do have a significant online presence are mostly
            city-based.
          </p>
          <img src='/images/why-we-are-different-mobile-345x294.png' />
        </ReadMoreTextBlock>
        <SubscribeToNewsletter />
      </main>
    );
  }
}

export default HomePage;
