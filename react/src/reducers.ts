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
            description: "Add task",
            estimatedTime: "2 hrs",
            priority: 1,
            progress: '10%',
            due_date: "12-June-16",
            dependencies: "",
            notes: "",
            activity: "",
            createdAt: "",
            completed: false
        }],
        completedTaskList: [{
            id: 0,
            title: "Add task task",
            description: "Add task",
            estimatedTime: "2 hrs",
            priority: 1,
            progress: '10%',
            due_date: "12-June-16",
            dependencies: "",
            notes: "",
            activity: "",
            createdAt: "",
            completed: true
        }]
    },
        {
            id: 1,
            title: "Design2",
            taskList: [{
                id: 0,
                title: "Create designs",
                description: "Lorem ipsum dolor sit amet, vel feugiat, non vel cras. Lectus magna mattis lectus aliquam est, dictum sed sapien, morbi fusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justo maecenas magna donec, turpis amet curabitur bibendum. Maecenas eget mauris phasellus nibh, integer orci, varius ipsum velit praesent.",
                estimatedTime: "2 hrs",
                priority: 5,
                progress: '30%',
                due_date: "12-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                completed: false
            }, {
                id: 1,
                title: "Create designs for KAT",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justent.",
                estimatedTime: "3 hrs",
                priority: 8,
                progress: '50%',
                due_date: "6-April-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                completed: false
            }, {
                id: 2,
                title: "Create designs for Blazent",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: '100%',
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                completed: false
            }],
            completedTaskList: [{
                id: 2,
                title: "Amala James",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: '100%',
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                completed: true
            }, {
                id: 2,
                title: "Amala Liza James",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: '100%',
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                completed: true
            }]
        }],
    searchText: ""
});

export function rootReducer(state:BoardListType = initialState, action) {

    switch (action.type) {

        case "ADD_BOARD":
            let newBoard = Immutable.fromJS({
                id: state.get("boardList").reduce((maxId, board) => Math.max(board.id, maxId), -1) + 1,
                title: "New Board",
                taskList: Immutable.List(),
                completedTaskList: Immutable.List()
            });
            state = state.updateIn(['boardList'], boardList => boardList.push(newBoard));
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "ADD_TASK":
            let newTask = Immutable.fromJS({
                id: state.get("boardList", action.boardIndex, "taskList").reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
                title: action.title,
                taskList: Immutable.List()
            });
            state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList => taskList.push(newTask));
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "TASK_COMPLETED":
            if (!state.getIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'])) {
                console.log("Completed");
                state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                    completed => !completed);
                let completedTask = state.getIn(['boardList', action.boardIndex, 'taskList', action.taskId]);
                state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList =>
                    taskList.splice(action.taskId, 1));
                state = state.updateIn(['boardList', action.boardIndex, 'completedTaskList'],
                    completedTaskList => completedTaskList.push(completedTask));
            }

            if (!state.getIn(['boardList', action.boardIndex, 'completedTaskList', action.taskId, 'completed'])) {
                console.log("Not Completed");
                state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                    completed => !completed);
                let Task = state.getIn(['boardList', action.boardIndex, 'taskList', action.taskId]);
                state = state.updateIn(['boardList', action.boardIndex, 'completedTaskList'],
                    completedTaskList => completedTaskList.splice(action.taskId, 1));
                state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList => taskList.push(Task));
            }


            state = state.set('searchText', state.get('searchText'));
            return state;

        case "PLAY_TASK":
            console.log("PLAY_TASK");

        case "PAUSE_TASK":
            console.log("PAUSE_TASK");


        case 'SEARCH_TASK':
            state = state.set('boardList', state.get('boardList'));
            state = state.set('searchText', action.searchText);
            return state;

        default:
            return state
    }
}