"use strict";
///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

export default function boardReducer(state, action) {
    switch (action.type) {

        case "ADD_BOARD":
            let newBoard = Immutable.fromJS({
                id: (String(+(new Date()) + Math.random())),
                title: "New Board",
                taskList: Immutable.List()
            });
            state = state.updateIn(['boardList'], boardList => boardList.push(newBoard));
            return state;

        case "RENAME_BOARD":
            state = state.updateIn(['boardList', action.boardIndex, 'title'],
                title => action.newTitle);
            return state;

        case "DELETE_BOARD":
            state = state.updateIn(['boardList'], boardList => boardList.splice(action.boardIndex, 1));
            return state;

        default:
            return state
    }
}