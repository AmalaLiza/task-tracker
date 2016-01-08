/// <reference path="../typings/redux/redux.d.ts" />

import { compose, createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers.ts';

const finalCreateStore = compose()(createStore);

export default function configureStore() {
    return finalCreateStore(rootReducer);
}