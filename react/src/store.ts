/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/redux-thunk/redux-thunk.d.ts"/>

import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../src/reducers/rootReducer.ts';
import createLogger from 'redux-logger';
import * as Immutable from "immutable";
import DevTools from "./container/DevTools.tsx";
import thunkMiddleware from 'redux-thunk';
import Actions from './actions.ts';

let history = {
    stateHistory : [],
    actionHistory : []
};

const logger = createLogger({
    predicate: (getState, action) => history.actionHistory.push(JSON.stringify(action)),

    stateTransformer: (state) => {
        history.stateHistory.push(JSON.stringify(state.toJS()));
        localStorage.history = JSON.stringify(history);
        return state.toJS();
    }
});

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, logger), DevTools.instrument())(createStore);

export function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}

const store = configureStore();

let storeState = store.getState();

export default store;
export {storeState};