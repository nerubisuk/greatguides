import React from 'react';
import Store from 'store';
import { toggleMobileMenu } from 'store/actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import Transition from 'react-addons-css-transition-group';
import styles from 'styles/components/MobileMenu.module.scss';

const MobileMenu = ({ auth }) => {
  const { state, dispatch } = React.useContext(Store);

  const handleToggle = () => {
    toggleMobileMenu(state.isMobileMenu, dispatch);
  };

  const handleTogglePrevent = e => {
    e.stopPropagation();
  };

  const renderGuest = () => (
    <div className={styles.buttons}>
      <button onClick={auth.login}>Log in</button>
      <span>or</span>
      <button onClick={auth.signup}>Sign up</button>
    </div>
  );

  const renderLogged = () => (
    <div className={styles.profile}>
      <div className={styles.profile_face}>
        <img src={auth.getUserData().picture} alt='avatar' />
      </div>
      <div className={styles.profile_name}>{auth.getUserData().name}</div>
    </div>
  );

  return (
    <div className={styles.wrapper} onClick={handleToggle}>
      <Transition
        transitionName='slideIn'
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
        component='div'
        className={styles.content}
        onClick={handleTogglePrevent}
      >
        <div className={styles.content_bg}>
          <div className={styles.header}>
            {!auth.isAuthenticated() ? renderGuest() : renderLogged()}
          </div>

          <div className={styles.nav}>
            {state.mainNav.map((item, index) => (
              <Link to={item.link} key={index}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className={styles.footer}>
            <div className={styles.social}>
              {state.socialLinks.map((item, index) => (
                <a key={index} target='_blank' rel='noopener noreferrer' href={item.link}>
                  <Icon name={item.icon} className={styles[item.icon]} />
                </a>
              ))}
            </div>

            <div className={styles.copyright}>
              Copyright © 2018 GreatGuides Corp. All&nbsp;rights&nbsp;reserved.&nbsp;
              <Link to='/'>Privacy&nbsp;policy</Link>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

MobileMenu.propTypes = {
  auth: PropTypes.object,
};

export default MobileMenu;
