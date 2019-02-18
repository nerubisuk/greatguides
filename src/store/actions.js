/**
 * @file Holds the Redux actions
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { createAction } from 'redux-actions';

// Adventure related actions
export const getAdventureById = createAction('ADVENTURE_BY_ID_REQUESTED');
createAction('ADVENTURE_BY_ID_SUCCEEDED');
