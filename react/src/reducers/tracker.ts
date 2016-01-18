///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "../models/BoardListType";

const initialState = Immutable.fromJS({
    id: 0,
    title: null,
    estimatedTime: 0,
    priority: 0,
    progress: 0,
    completed: false
});

export default function tracker(state = initialState, action) {
    switch (action.type) {

        case "PLAY_TASK":
            console.log("PLAY_TASK");
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'progress'],
                progress => progress);
            return state;

        case "PAUSE_TASK":
            console.log("PAUSE_TASK", action, state.getIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'progress']));
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'progress'],
                progress => action.progress);
            return state;

        default :
            return state;
    }
}

