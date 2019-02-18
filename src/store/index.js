/**
 * @file Holds the Redux store definition
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* Imports desired Redux parts */
import initialState from './state';
import reducers from './reducers';
import sagas from './sagas/';

/* Defindes middlewares */
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

/* Defines global store */
const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

/* Runs every saga in the system */
sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
