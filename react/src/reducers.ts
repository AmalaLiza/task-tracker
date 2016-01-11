///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "./models/BoardListType";

const initialState:BoardListType = Immutable.fromJS({
    boardList: [{
        id: 0,
        title: "Design1",
        taskList: [{
            id: 0,
            title: "Add task",
            estimatedTime: "2 hrs",
            completed: true
        }]
    },
    {
        id: 1,
        title: "Design2",
        taskList: [{
            id: 0,
            title: "Create designs for insight screen",
            estimatedTime: "2 hrs",
            completed: true
        }, {
            id: 1,
            title: "Create designs for KAT",
            estimatedTime: "3 hrs",
            completed: false
        }, {
            id: 2,
            title: "Create designs for Blazent",
            estimatedTime: "4 hrs",
            completed: true
        }]
    }]
});

export function rootReducer(state:BoardListType = initialState, action) {

    switch (action.type) {

        case "ADD_BOARD":
            let newBoard = Immutable.fromJS({
                id: state.get("boardList").reduce((maxId, board) => Math.max(board.id, maxId), -1) + 1,
                title: "New Board",
                taskList: Immutable.List()
            });
            state = state.updateIn(['boardList'], boardList => boardList.push(newBoard));
            return state;

        case "ADD_TASK":
            let newTask = Immutable.fromJS({
                id: state.get("boardList", "taskList").reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
                title: action.title,
                taskList: Immutable.List()
            });

            state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList => taskList.push(newTask));
            return state;

        default:
            return state;
    }
}