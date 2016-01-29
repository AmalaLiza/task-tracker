"use strict";

///<reference path='../../typings/immutable/immutable.d.ts'/>
import BoardType from "../models/BoardType.ts";
import StateType from "../models/StateType.ts";
import * as Immutable from 'immutable';
import {boardReducer} from "./boardReducer.ts";
import {taskReducer} from "./taskReducer.ts";

const initialState:StateType = Immutable.fromJS({
    boardList: [],
    searchText: "",
    activeTask: {},
    expandedTask: {}
});

export function rootReducer(state:StateType = initialState, action) {

    switch (action.type) {

        case "ADD_BOARD":
        case "RENAME_BOARD":
        case "DELETE_BOARD":
            return boardReducer(state, action);

        case "ADD_TASK":
        case "TASK_COMPLETED":
        case "PLAY_TASK":
        case "PAUSE_TASK":
        case 'EXPAND_TASK':
        case "HIDE_TASK":
        case "DELETE_TASK":
        case "SAVE_TASK":
            return taskReducer(state, action);

        case 'SEARCH_TASK':
            state = state.update('searchText', searchText => action.searchText);
            return state;

        default:
            return state;
    }
}