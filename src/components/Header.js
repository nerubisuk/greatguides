/**
 * @file Holds the <Header> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */

/**
 * TODO: 
 * Replace PNG to SVG
 * Add PropTypes
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
    link: '/'
  },
  {
    title: 'Adventures',
    link: '/'
  },
  {
    title: 'Become a guide',
    link: '/'
  },
  {
    title: 'Stories',
    link: '/'
  }
];

const dropItems = [
  {
    title: 'Profile',
    link: '/'
  },
  {
    title: 'Account Details',
    link: '/'
  },
  {
    title: 'My Adventures',
    link: '/'
  },
  {
    title: 'Customer Trips',
    link: '/'
  },
  {
    title: 'My Messages',
    link: '/'
  }
];

/* Component definition */
class Header extends React.Component {
  state = {
    isDropDown: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleLogin = () => {
    this.props.auth.login();
  }

  handleSignup = () => {
    this.props.auth.signup();
  }

  handleLogout = () => {
    this.props.auth.logout(this.props.history);
  }

  handleToggleDropDown = () => {
    this.setState({
      isDropDown: !this.state.isDropDown
    });
  }

  setDropDownRef = (node) => {
    this.dropDownRef = node;
  }

  handleClickOutside = (event) => {
    if (this.dropDownRef && !this.dropDownRef.contains(event.target)) {
      this.handleToggleDropDown();
    }
  }

  render() {
    const { mql, auth } = this.props,
      { isDropDown } = this.state;

    return <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src='data:image/png;base64,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' alt='logo' />
        </Link>
      </div>

      {mql !== 'mobile' && <nav className={styles.nav}>
        {navItems.map((item, index) =>
          <Link key={index} to={item.link}>{item.title}</Link>
        )}
      </nav>}

      <div className={styles.right_column}>
        <Icon name='search' className={styles.icon_search} />
        {
          mql !== 'desktop' && 
          <Icon name='burger' className={styles.icon_burger} />
        }
      </div>

      {
        mql !== 'mobile' &&
        <>
          {
            auth.isAuthenticated()

              ? <div className={styles.profile} onClick={this.handleToggleDropDown}>
                <div>
                  <img src={auth.getUserData().picture} alt='avatar' />
                </div>


                {
                  isDropDown
                  && <Transition
                    transitionName='fadeIn'
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnter={false}
                    transitionLeave={false}
                  >
                    <ul className={styles.dropdown} ref={this.setDropDownRef}>
                      {dropItems.map((item, index) =>
                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                      )}
                      <li><button onClick={this.handleLogout}>Signout</button></li>
                    </ul>
                  </Transition>}
              </div>

              : <div className={styles.buttons}>
                <button onClick={this.handleLogin}>Log in</button>
                <span>or</span>
                <button onClick={this.handleSignup}>Sign up</button>
              </div>
          }
        </>
      }
    </header>;
  }
}

/* PropTypes definition */
Header.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object,
  mql: PropTypes.string
};

export default Header;