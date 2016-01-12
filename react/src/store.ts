/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/redux-thunk/redux-thunk.d.ts"/>

import { compose, createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers.ts';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Actions from './actions.ts';

const logger = createLogger({
    collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}