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
import styles from 'styles/components/Header.module.scss';

/* Constants definition */
const navItems = [
  {
    title: 'Guides',
    link: '/',
  },
  {
    title: 'Adventures',
    link: '/',
  },
  {
    title: 'Become a guide',
    link: '/',
  },
  {
    title: 'Stories',
    link: '/',
  },
];

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

/* Component definition */
class Header extends React.Component {
  state = {
    isDropDown: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleLogin = () => {
    this.props.auth.login();
  };

  handleSignup = () => {
    this.props.auth.signup();
  };

  handleLogout = () => {
    this.props.auth.logout(this.props.history);
  };

  handleToggleDropDown = () => {
    this.setState({
      isDropDown: !this.state.isDropDown,
    });
  };

  setDropDownRef = node => {
    this.dropDownRef = node;
  };

  handleClickOutside = event => {
    if (this.dropDownRef && !this.dropDownRef.contains(event.target)) {
      this.handleToggleDropDown();
    }
  };

  render() {
    const { mql, auth, location } = this.props,
      { isDropDown } = this.state;

    const isHomePage = location.pathname === '/';

    return (
      <header className={[`${styles.wrapper} ${isHomePage && styles.home_page}`]}>
        <div className={styles.logo}>
          <Link to='/'>
            <Icon name='logo' className='icon_logo' />
          </Link>
        </div>

        {mql !== 'mobile' && (
          <nav className={styles.nav}>
            {navItems.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>
        )}

        <div className={styles.right_column}>
          <Icon name='search' className={styles.icon_search} />
          {mql !== 'desktop' && <Icon name='burger' className={styles.icon_burger} />}
        </div>

        {mql !== 'mobile' && (
          <>
            {auth.isAuthenticated() ? (
              <div className={styles.profile} onClick={this.handleToggleDropDown}>
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
                    <ul className={styles.dropdown} ref={this.setDropDownRef}>
                      {dropItems.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link}>{item.title}</Link>
                        </li>
                      ))}
                      <li>
                        <button onClick={this.handleLogout}>Signout</button>
                      </li>
                    </ul>
                  </Transition>
                )}
              </div>
            ) : (
              <div className={styles.buttons}>
                <button onClick={this.handleLogin}>Log in</button>
                <span>or</span>
                <button onClick={this.handleSignup}>Sign up</button>
              </div>
            )}
          </>
        )}
      </header>
    );
  }
}

/* PropTypes definition */
Header.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object,
  mql: PropTypes.string,
  location: PropTypes.object,
};

export default Header;
