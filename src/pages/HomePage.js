/**
 * @file Holds the <HomePage> page
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from 'styles/pages/HomePage.module.scss';
import HomeHeader from 'components/HomeHeader';
import AdventureCard from 'components/AdventureCard';
import GuideCard from 'components/GuideCard';
import CardList from 'containers/CardList';
import SubscribeToNewsletter from 'components/SubscribeToNewsletter';
import ReadMoreTextBlock from 'components/ReadMoreTextBlock';
import MapBox from 'components/MapBox';
import data from 'mocks/home.json';

/* Component definition */
class HomePage extends React.Component {
  render() {
    return (
      <main className={styles.wrapper}>
        <HomeHeader guides={data.guides} />

        {/* Popular adventures */}
        <CardList categories={data.popular.categories} bgColor='grey' isMore columns='c3'>
          <h3>Popular Adventures</h3>
          <p>
            Our guides have a lot of greate adventures in different categories like Rafting, Hiking,
            Biking and Walking.
          </p>

          {data.popular.similar.map((item, index) => (
            <AdventureCard key={index} adventure={item} />
          ))}
        </CardList>

        {/* Our Guides */}
        <CardList categories={data.guides.categories} bgColor='white' columns='c4'>
          <h3>Our guides</h3>
          <p>
            We have top guides from around the world. GreatGuides.com is about personal contact.
          </p>

          {data.guides.items.map((item, index) => (
            <GuideCard key={index} guide={item} />
          ))}
        </CardList>

        {/* Map */}
        <MapBox />
        {/*<div className={styles.map} id="mapBoxContainer">
           <img src='/images/map.png' alt='map' /> 
        </div>*/}

        {/* Read more blocks */}
        <ReadMoreTextBlock bgColor='white'>
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
          <img alt='about-us' src='https://source.unsplash.com/600x800/?people' />
        </ReadMoreTextBlock>
        <ReadMoreTextBlock bgColor='grey' isReverseOrder>
          <h3>How it works?</h3>
          <p>
            Guides can set up their profile and are approved based on their level of experience,
            their cultural and regional knowledge and past reviews. We recommend all guides follow
            our guide standards document. Once approved, guides remain in control of the itineraries
            they create. They work out the trip schedule they want us to promote and the price they
            wish to charge for their services, leaving GreatGuides.com to take care of admin behind
            the scenes.
          </p>
          <p>
            Meanwhile, travellers get to access reviews and trip histories as well as check what
            skills a guide brings to the table. Via the site, the traveller and guide have the
            opportunity to discuss any...
          </p>
          <img alt='how-it-works' src='https://source.unsplash.com/600x800/?nature' />
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
          <p>
            Via GreatGuides.com, the guides get to keep the majority of their fee, rather than
            losing much of it to intermediary tour operators. Travellers can therefore leave home
            secure in the knowledge that they’re supporting the local economy without risking the
            quality…
          </p>
          <img alt='why-we-are-different' src='/images/why-we-are-different-mobile-345x294.png' />
        </ReadMoreTextBlock>

        {/* Subscribe to newsletter */}
        <SubscribeToNewsletter />
      </main>
    );
  }
}

export default HomePage;
