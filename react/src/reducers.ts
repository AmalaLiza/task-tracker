///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    boardList: [{
        id: 1,
        title: "Design",
        taskList: [{
            id: 1,
            value: "Add task",
            estimatedTime: "2 hrs",
            completed: true
        }]
    },
    {
        id: 2,
        title: "Design",
        taskList: [{
            id: 1,
            value: "Create designs for insight screen",
            estimatedTime: "2 hrs",
            completed: true
        }, {
            id: 2,
            value: "Create designs for KAT",
            estimatedTime: "3 hrs",
            completed: false
        }, {
            id: 3,
            value: "Create designs for Blazent",
            estimatedTime: "4 hrs",
            completed: true
        }]
    }]
});

export function rootReducer(state = initialState, action) {

    console.log(state.toJS(), action);
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

            state = state.updateIn(['boardList'], boardList => {
                return boardList.update(action.boardId, (board) =>
                    board.updateIn("taskList", taskList => taskList.push(newTask)));
            });
            return state

        default:
            return state;
    }
}