import React from 'react';
import PropTypes from 'prop-types';
import matchMedia from 'utils/matchMedia';

const Store = React.createContext();

const initialState = {
  mql: matchMedia(),
  guides: [],
  adventures: [],
  isMobileMenu: false,
  mainNav: [
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
  ],
  socialLinks: [
    {
      link: 'http://facebook.com',
      icon: 'facebook',
    },
    {
      link: 'http://twitter.com',
      icon: 'twitter',
    },
    {
      link: 'http://instagram.com',
      icon: 'instagram',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_MQL':
    return { ...state, mql: action.payload };

  case 'TOGGLE_MOBILE_MENU':
    return { ...state, isMobileMenu: action.payload };

  case 'FETCH_GUIDES':
    return { ...state, guides: action.payload };

  case 'FETCH_ADVENTURES':
    return { ...state, adventures: action.payload };

  case 'FETCH_ADVENTURE_BY_ID':
    return { ...state, adventures: action.payload };

  default:
    return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  /* Set's mql string */
  const handleResize = () => {
    dispatch({
      type: 'SET_MQL',
      payload: matchMedia(),
    });
  };

  /**
   * Side effect as
   * lifecycle methods
   */
  React.useEffect(() => {
    /* componentDidMount */
    window.addEventListener('resize', handleResize);

    /* componentWillUnmount */
    return () => window.removeEventListener('resize', handleResize);
  });

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.object,
};

export default Store;
