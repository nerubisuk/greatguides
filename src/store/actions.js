import API from 'api';
import { getAdventures, getGuides, getAdventureById } from 'api/queries';

export const toggleMobileMenu = (isMobileMenu, dispatch) => {
  document.body.classList.toggle('overlayed');

  return dispatch({
    type: 'TOGGLE_MOBILE_MENU',
    payload: !isMobileMenu,
  });
};

export const fetchGuides = async (first, dispatch) => {
  try {
    const { data } = await API.query({
      query: getGuides,
      variables: { first, role: 'Guide' },
    });

    return dispatch({
      type: 'FETCH_GUIDES',
      payload: data.users,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAdventures = async (first, dispatch) => {
  try {
    const { data } = await API.query({
      query: getAdventures,
      variables: { first },
    });

    return dispatch({
      type: 'FETCH_ADVENTURES',
      payload: data.adventures,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAdventureById = async (state, id, dispatch) => {
  try {
    const { data } = await API.query({
      query: getAdventureById,
      variables: { id },
    });

    if (!state.adventures.some(item => item.id === data.adventure.id)) {
      state.adventures.push(data.adventure);
    }

    return dispatch({
      type: 'FETCH_ADVENTURE_BY_ID',
      payload: state.adventures,
    });
  } catch (err) {
    console.error(err);
  }
};
