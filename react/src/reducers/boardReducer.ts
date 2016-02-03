"use strict";
///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

export function boardReducer(state, action) {
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
            if (state.getIn(['expandedTask', 'boardIndex']) == action.boardIndex) {
                state = state.updateIn(['expandedTask'], () => Immutable.Map({}));
            }
            if (state.getIn(['activeTask', 'boardIndex']) == action.boardIndex) {
                state = state.updateIn(['activeTask'], () => Immutable.Map({}));
            }
            return state;

        case "SAVE_BOARD" :
            state = state.update('show', show => true);
            return state;

        case "GET_BOARD":
            state = state.update('boardList', boardList => Immutable.fromJS(action.boardList));
            return state;

        default:
            return state
    }
}