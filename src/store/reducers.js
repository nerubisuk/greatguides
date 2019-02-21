/**
 * @file Holds the Redux reducers
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { handleActions } from 'redux-actions';
import initialState from './state';
import { _LOGGER } from 'utils/helpers-common';

export default handleActions(
  {
    ADVENTURE_BY_ID_SUCCEEDED: (state, { adventure }) => {
      if (!state.adventures.some(item => item.id === adventure.id)) {
        state.adventures.push(adventure);
      }

      _LOGGER('ADVENTURE_BY_ID_SUCCEEDED');

      return {
        ...state,
      };
    },
  },

  initialState
);
