var Immutable = require('immutable');
const initialState = Immutable.fromJS({
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
function rootReducer(state = initialState, action) {
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
        case "TASK_COMPLETED":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId], task => task.get('completed'));
            return state;
        default:
            return state;
    }
}
exports.rootReducer = rootReducer;
//# sourceMappingURL=reducers.js.map