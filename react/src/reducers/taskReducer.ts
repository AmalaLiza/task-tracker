///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "../models/BoardListType";

export default function taskReducer(state, action) {
    switch (action.type) {

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
                isPlaying:false,
                isExpanded:false,
                completed: false
            });
            state = state.updateIn(['boardList', action.boardIndex, 'taskList'], taskList => taskList.push(newTask));
            return state;

        case "TASK_COMPLETED":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                completed => !completed);
            return state;

        case "PLAY_TASK":
            console.log("play");
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.activeTask.get('id'), 'isPlaying'],
                isPlaying => !isPlaying);
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.previousTaskId, 'isPlaying'],
                isPlaying => !isPlaying);
            action.activeTask = action.activeTask.update('isPlaying', isPlaying => true);
            state = state.update('activeTask', activeTask => action.activeTask);
            return state;

        case "PAUSE_TASK":
            console.log("pause");
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.activeTask.get('id'), 'progress'],
                progress => action.progress);
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.activeTask.get('id'), 'isPlaying'],
                isPlaying => false);
            if(!action.previousTask)
                state = state.updateIn(['activeTask','progress'], progress => action.progress);
            return state;

        default:
            return state
    }
}