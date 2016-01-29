"use strict";
///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

export function taskReducer(state, action) {
    switch (action.type) {

        case "ADD_TASK":
            let newTask = Immutable.fromJS({
                id: (String(+(new Date()) + Math.random())),
                title: action.title,
                description: "",
                estimatedTime: 1,
                priority: 0,
                progress: 0,
                due_date: "",
                dependencies: "",
                notes: "",
                activity: "",
                createdAt: new Date(),
                taskList: Immutable.List(),
                isPlaying: false,
                isExpanded: false,
                completed: false
            });
            state = state.updateIn(['boardList', action.boardIndex, 'taskList'],
                taskList => taskList.push(newTask));
            return state;

        case "TASK_COMPLETED":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskId, 'completed'],
                completed => !completed);
            return state;

        case "PLAY_TASK":
            state = state.updateIn(['boardList', action.boardId, 'taskList', action.taskId, 'isPlaying'],
                isPlaying => true);
            if(state.get(['boardList', action.boardId, 'taskList', action.taskId, 'progress']) == 0) {
                state = state.updateIn(['boardList', action.boardId, 'taskList', action.taskId, 'createdAt'],
                    createdAt => new Date());
            }
            state = state.set('activeTask', state.getIn(['boardList', action.boardId, 'taskList', action.taskId]));
            state = state.setIn(['activeTask', 'boardIndex'], action.boardId);
            state = state.setIn(['activeTask', 'index'], action.taskId);
            return state;

        case "PAUSE_TASK":
            state = state.updateIn(['boardList', action.boardId, 'taskList', action.taskId, 'progress'],
                progress => action.progress);
            state = state.updateIn(['boardList', action.boardId, 'taskList', action.taskId, 'isPlaying'],
                isPlaying => false);
            state = state.updateIn(['activeTask', 'progress'], progress => action.progress);
            if(state.getIn(['expandedTask', 'id']) == state.getIn(['activeTask', 'id']))
                state = state.updateIn(['expandedTask', 'progress'], progress => action.progress);
            state = state.updateIn(['activeTask', 'isPlaying'], progress => false);
            return state;

        case "EXPAND_TASK":
            state = state.updateIn(['boardList', state.getIn(['expandedTask', 'boardIndex']), 'taskList', state.getIn(['expandedTask', 'index']), 'isExpanded'],
                isExpanded => false);
            state = state.updateIn(['boardList', action.boardIndex, 'taskList', action.taskIndex, 'isExpanded'],
                isExpanded => !action.isExpanded);
            state = state.set('expandedTask', state.getIn(['boardList', action.boardIndex, 'taskList', action.taskIndex]));
            state = state.setIn(['expandedTask', 'boardIndex'], action.boardIndex);
            state = state.setIn(['expandedTask', 'index'], action.taskIndex);
            return state;

        case "HIDE_TASK":
            state = state.updateIn(['boardList', state.getIn(['expandedTask', 'boardIndex']), 'taskList', state.getIn(['expandedTask', 'index']), 'isExpanded'],
                isExpanded => false);
            state = state.updateIn(['expandedTask'], expandedTask =>  Immutable.Map({}));
            return state;

        case "DELETE_TASK":
            state = state.updateIn(['boardList', action.boardIndex, 'taskList'],
                taskList => taskList.splice(action.taskIndex, 1));
            return state;

        case "SAVE_TASK":
            let boardIndex = state.getIn(['expandedTask', 'boardIndex']);
            let taskIndex = state.getIn(['expandedTask', 'index']);
            state = state.updateIn(['boardList', boardIndex, 'taskList', taskIndex],
                task => {
                    task = task.update('title', title => action.updatedInfo.title);
                    task = task.update('due_date', due_date => action.updatedInfo.due_date);
                    task = task.update('estimatedTime', estimatedTime => action.updatedInfo.estimatedTime);
                    task = task.update('description', description => action.updatedInfo.description);
                    return task
                });
            state = state.update('expandedTask', task => state.getIn(['boardList', boardIndex, 'taskList', taskIndex]));
            state = state.setIn(['expandedTask', 'boardIndex'], boardIndex);
            state = state.setIn(['expandedTask', 'index'], taskIndex);
            return state;
        default:
            return state
    }
}