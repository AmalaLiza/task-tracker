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

const timeoutScheduler = store => next => action => {
    if (!action.meta || !action.meta.delay) {
        console.log("Haiii", action);
        return next(action)
    }
    console.log("Haiii out",  action);

    let timeoutId = setTimeout(
        () => next(action),
        action.meta.delay
    )

    return function cancel() {
        clearTimeout(timeoutId)
    }
}

const createStoreWithMiddleware = applyMiddleware(logger, thunk, timeoutScheduler)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}