/**
 * @file Holds the Redux store definition
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

// Inital redux store state
const initialState = {};

// Enhancers & middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
