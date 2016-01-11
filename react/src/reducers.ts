///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    boardList: [{
        id: 0,
        title: "Design",
        taskList: [{
            id: 0,
            value: "Add task",
            estimatedTime: "2 hrs",
            completed: true
        }]
    },
    {
        id: 1,
        title: "Design",
        taskList: [{
            id: 0,
            value: "Create designs for insight screen",
            estimatedTime: "2 hrs",
            completed: true
        }, {
            id: 1,
            value: "Create designs for KAT",
            estimatedTime: "3 hrs",
            completed: false
        }, {
            id: 2,
            value: "Create designs for Blazent",
            estimatedTime: "4 hrs",
            completed: true
        }]
    }]
});

export function rootReducer(state = initialState, action) {

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
                value: action.value,
                taskList: Immutable.List()
            });

            state = state.updateIn(['boardList', action.boardId, 'taskList'], taskList => taskList.push(newTask));
            return state

        default:
            return state;
    }
}