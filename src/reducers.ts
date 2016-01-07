///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

export function rootReducer(state , action) {
    console.log(state, action);
    return state;
}