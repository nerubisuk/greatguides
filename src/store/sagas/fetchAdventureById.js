/**
 * @file Holds saga to fetch adventure by id
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'api';
import { getAdventureById as query } from 'api/queries';

export default function* fetchAdventureById() {
  yield takeEvery(
    'ADVENTURE_BY_ID_REQUESTED',

    function*({ payload }) {
      try {
        const {
          data: { adventure },
        } = yield call(API.query, { query, variables: { id: payload.id } });

        yield put({ type: 'ADVENTURE_BY_ID_SUCCEEDED', adventure });
      } catch (e) {
        console.log(e);
      }
    }
  );
}
