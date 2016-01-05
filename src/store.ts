/// <reference path="../typings/redux/redux.d.ts" />

import { compose, createStore, applyMiddleware } from 'redux';

const finalCreateStore = compose()(createStore);

export default function configureStore() {
    return finalCreateStore(rootReducer);
}