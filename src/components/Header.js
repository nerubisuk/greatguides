/**
 * @file Holds the <Header> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Transition from 'react-addons-css-transition-group';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import Store from 'store';
import { toggleMobileMenu } from 'store/actions';
import styles from 'styles/components/Header.module.scss';

const dropItems = [
  {
    title: 'Profile',
    link: '/',
  },
  {
    title: 'Account Details',
    link: '/',
  },
  {
    title: 'My Adventures',
    link: '/',
  },
  {
    title: 'Customer Trips',
    link: '/',
  },
  {
    title: 'My Messages',
    link: '/',
  },
];

const Header = ({ mql, auth, location, history }) => {
  const { state, dispatch } = React.useContext(Store);

  const dropDownRef = React.useRef(null);

  const [isDropDown, toggleDropDown] = React.useState(false);

  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    /* componentDidMount */
    document.addEventListener('mousedown', handleClickOutside, false);

    /* componentWillUnmount */
    return () => document.removeEventListener('mousedown', handleClickOutside, false);
  }, []);

  const handleClickOutside = e => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      toggleDropDown(false);
    }
  };

  const handleToggleDropDown = () => {
    toggleDropDown(true);
  };

  const handleLogin = () => {
    auth.login();
  };

  const handleSignup = () => {
    auth.signup();
  };

  const handleLogout = () => {
    auth.logout(history);
  };

  const handleToggleMobileMenu = () => {
    toggleMobileMenu(state.isMobileMenu, dispatch);
  };

  return (
    <header className={[`${styles.wrapper} ${isHomePage && styles.home_page}`]}>
      <div className={styles.logo}>
        <Link to='/'>
          <Icon name='logo' className='icon_logo' />
        </Link>
      </div>

      {mql !== 'mobile' && (
        <nav className={styles.nav}>
          {state.mainNav.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      )}

      <div className={styles.right_column}>
        <Icon name='search' className={styles.icon_search} />
        {mql !== 'desktop' && (
          <button onClick={handleToggleMobileMenu}>
            <Icon name='burger' className={styles.icon_burger} />
          </button>
        )}
      </div>

      {mql !== 'mobile' && (
        <React.Fragment>
          {auth.isAuthenticated() ? (
            <div className={styles.profile} onClick={handleToggleDropDown}>
              <div>
                <img src={auth.getUserData().picture} alt='avatar' />
              </div>

              {isDropDown && (
                <Transition
                  transitionName='fadeIn'
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <ul className={styles.dropdown} ref={dropDownRef}>
                    {dropItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    ))}
                    <li>
                      <button onClick={handleLogout}>Signout</button>
                    </li>
                  </ul>
                </Transition>
              )}
            </div>
          ) : (
            <div className={styles.buttons}>
              <button onClick={handleLogin}>Log in</button>
              <span>or</span>
              <button onClick={handleSignup}>Sign up</button>
            </div>
          )}
        </React.Fragment>
      )}
    </header>
  );
};

/* PropTypes definition */
Header.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object,
  mql: PropTypes.string,
  location: PropTypes.object,
};

export default Header;
