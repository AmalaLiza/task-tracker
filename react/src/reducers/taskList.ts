///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {BoardListType} from "../models/BoardListType";
import task from "./task.ts";

export default function taskList(state, action) {
    switch (action.type) {

        case "ADD_TASK":
            let newTask = Immutable.fromJS({
                id: state.get('boardList',action.boardIndex, 'taskList').size,
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
            state = state.updateIn(['boardList',action.boardIndex, 'taskList', action.taskId],taskList => taskList.push(newTask));
            return state;

        case 'SEARCH_TASK':
            state = state.set('boardList', state.get('boardList'));
            state = state.set('searchText', action.searchText);
            return state;

        default:
            task(state, action);
    }
}

