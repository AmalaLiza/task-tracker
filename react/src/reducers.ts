///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "./models/BoardListType";

const initialState:BoardListType = Immutable.fromJS({
    boardList: [{
        id: 0,
        title: "Design2",
        taskList: [
            {
                id: 0,
                title: "Create designs",
                description: "Lorem ipsum dolor sit amet, vel feugiat, non vel cras. Lectus magna mattis lectus aliquam est, dictum sed sapien, morbi fusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justo maecenas magna donec, turpis amet curabitur bibendum. Maecenas eget mauris phasellus nibh, integer orci, varius ipsum velit praesent.",
                estimatedTime: "2 hrs",
                priority: 5,
                progress: 30,
                due_date: "12-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                isPlaying: false,
                completed: false
            }, {
                id: 1,
                title: "Create designs for KAT",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viverra dapibus. Arcu ultrices aspernatur urna sit risus varius, vulputate mi ultrices fermentum, aliquam a fermentum vivamus aenean, eos arcu imperdiet mauris torquent vitae. Aenean lectus sodales per elit aliquam, phasellus ac at, tristique vitae ligula viverra elit quisque volutpat. Tristique faucibus ridiculus sed, morbi mauris vestibulum a dolor augue tortor, sapien maecenas malesuada sed aliquet velit nunc. Mi fugiat euismod magna, lacinia commodo eleifend, parturient metus, iaculis elit vivamus non eu orci a. Suspendisse ut, tincidunt venenatis semper. Donec justent.",
                estimatedTime: "3 hrs",
                priority: 8,
                progress: 50,
                due_date: "6-April-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                isPlaying: false,
                completed: false
            }, {
                id: 2,
                title: "Create designs for Blazent",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: 100,
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                isPlaying: false,
                completed: false
            }, {
                id: 3,
                title: "Amala James",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: 100,
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                isPlaying: false,
                completed: true
            }, {
                id: 4,
                title: "Amala Liza James",
                description: "Lorem ipsum dolor sitfusce volutpat. Arcu venenatis conubia congue cras in vitae, et viv",
                estimatedTime: "4 hrs",
                priority: 10,
                progress: 100,
                due_date: "29-June-16",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                isPlaying: false,
                completed: true
            }]
    }],
    searchText: "",
    activeTask: {}
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
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "ADD_TASK":
            let newTask = Immutable.fromJS({
                id: state.getIn(["boardList", action.boardIndex, "taskList"]).size,
                title: action.title,
                description: "",
                estimatedTime: "",
                priority: 0,
                progress: '0',
                due_date: "",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: "",
                taskList: Immutable.List(),
                completed: false
            });
            state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList => taskList.push(newTask));
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "TASK_COMPLETED":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                completed => !completed);
            state = state.set('searchText', state.get('searchText'));
            return state;

        case "PLAY_TASK":
            action.task = action.task.update('isPlaying', isPlaying => true);
            state = state.update('activeTask', activeTask => action.task);
            return state;

        case "PAUSE_TASK":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'progress'],
                progress => action.progress);
            return state;

        case 'SEARCH_TASK':
            state = state.set('boardList', state.get('boardList'));
            state = state.set('searchText', action.searchText);
            return state;

        case 'EXPAND_TASK':
            return state;

        default:
            return state
    }
}