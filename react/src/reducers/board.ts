///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "../models/BoardListType";
import taskList from "./taskList.ts"

const initialState = Immutable.fromJS({
    boardList: [{
        id: 0,
        title: "First Board",
        taskList: [{
            id: 0,
            title: "Add task",
            description: "Add task",
            estimatedTime: "2 hrs",
            priority: 1,
            progress: 10,
            due_date: "12-June-16",
            dependencies: "",
            notes: "",
            activity: "",
            createdAt: "",
            completed: false
        }]
    }]
});

export default function board(state = initialState, action) {
    switch (action.type) {

        case "ADD_BOARD":
            let newBoard = Immutable.fromJS({
                id: state.get("boardList").reduce((maxId, board) => Math.max(board.id, maxId), -1) + 1,
                title: "New Board",
                taskList: Immutable.List()
            });
            state = state.updateIn(['boardList'], boardList => boardList.push(newBoard));
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "ADD_TASK":
        case 'SEARCH_TASK':
            taskList(state, action);

        default :
            return state;
    }
}

