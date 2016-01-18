/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/redux-thunk/redux-thunk.d.ts"/>

import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../src/reducers.ts';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Actions from './actions.ts';

const logger = createLogger({
    collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}