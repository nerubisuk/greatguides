import API from 'api';
import { getAdventureById } from 'api/queries';

export const fetchAdventureById = async (id, dispatch) => {
  try {
    const { data } = await API.query({
      query: getAdventureById,
      variables: { id },
    });

    return dispatch({
      type: 'FETCH_ADVENTURE_BY_ID',
      payload: data.adventure,
    });
  } catch (err) {
    console.error(err);
  }
};
