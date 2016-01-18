///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "../models/BoardListType";

const initialState = Immutable.fromJS({
    taskList: [
        {
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
        },
        {
            id: 1,
            title: "Add task task",
            description: "Add task",
            estimatedTime: "2 hrs",
            priority: 1,
            progress: 10,
            due_date: "12-June-16",
            dependencies: "",
            notes: "",
            activity: "",
            createdAt: "",
            completed: true
        }]
});

export default function task(state = initialState, action) {
    switch (action.type) {

        case "TASK_COMPLETED":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                completed => !completed);
            state = state.set('searchText', state.get('searchText'));
            return state;

        default:
            return state
    }
}

