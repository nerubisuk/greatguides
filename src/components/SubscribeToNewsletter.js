/**
 * @file Holds the <SubscribeToNewsletter> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from 'components/Icon';
import styles from 'styles/components/SubscribeToNewsletter.module.scss';

/* Component definition */
const SubscribeToNewsletter = () => {
  let email;

  const handleChange = e => {
    email = e.target.value;
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Subscribe to our news letter</h3>
      <p>Sign up and we will send inspiration directly to your inbox</p>

      <form onSubmit={onSubmit}>
        <input type='text' onChange={handleChange} placeholder='Your email' />
        <button type='submit'>
          Subscribe
          <Icon name='arrow-right-big' />
        </button>
      </form>
    </div>
  );
};

export default SubscribeToNewsletter;
