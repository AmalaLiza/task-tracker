/// <reference path="../typings/chai/chai.d.ts" />
///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {rootReducer} from "../src/reducers/rootReducer";
import chai = require('chai');

const initialState = Immutable.fromJS({
    boardList: [{
        id: (String(+(new Date()) + Math.random())),
        title: "New Board",
        taskList: [{
            id: (String(+(new Date()) + Math.random())),
            title: "New Task",
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
        }]
    }],
    searchText: "",
    activeTask: {},
    expandedTask: {}
});

describe("Task Reducer", () => {

    it('should add task', () => {
        let newState = rootReducer(initialState, {
            type: "ADD_TASK",
            title: "new task",
            boardIndex: 0
        });
        chai.assert.equal(initialState.getIn(["boardList", 0, "taskList"]).size + 1, newState.getIn(["boardList", 0, "taskList"]).size)
    });

    it('should complete task', () => {
        let newState = rootReducer(initialState, {
            type: "TASK_COMPLETED",
            boardIndex: 0,
            taskId: 0
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'completed']), !initialState.getIn(["boardList", 0, "taskList", 0, 'completed']))
    });

    it('should play task', () => {
        let newState = rootReducer(initialState, {
            type: "PLAY_TASK",
            boardId: 0,
            taskId: 0
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']), !initialState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']))
    });

    it('should play task', () => {
        let newState = rootReducer(initialState, {
            type: "PLAY_TASK",
            boardId: 0,
            taskId: 0
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']), true);
        chai.assert.equal(newState.getIn(["activeTask", 'isPlaying']), true)
    });

    it('should pause task', () => {
        let newState = rootReducer(initialState, {
            type: "PAUSE_TASK",
            boardId: 0,
            taskId: 0,
            progress: 10
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']), false);
        chai.assert.equal(newState.getIn(["activeTask", 'isPlaying']), false);
        chai.assert.isAbove(newState.getIn(["boardList", 0, "taskList", 0, 'progress']), initialState.getIn(["boardList", 0, "taskList", 0, 'progress']))
    });

    it('should expand task', () => {
        let newState = rootReducer(initialState, {
            type: "EXPAND_TASK",
            boardIndex: 0,
            taskIndex: 0
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isExpanded']), true);
        chai.assert.equal(newState.getIn(["expandedTask", 'isExpanded']), true)
        chai.assert.equal(newState.getIn(["expandedTask", 'boardIndex']), 0)
        chai.assert.equal(newState.getIn(["expandedTask", 'index']), 0)
    });

    it('should hide task', () => {
        let newState = rootReducer(initialState, {
            type: "EXPAND_TASK",
            boardIndex: 0,
            taskIndex: 0
        });
        newState = rootReducer(newState, {
            type: "HIDE_TASK"
        });
        chai.assert.equal(newState.getIn(['boardList', 0, 'taskList', 0, 'isExpanded']), false);
        chai.assert.equal(newState.get("expandedTask").size, 0)
    });

    it('should delete task', () => {
        let newState = rootReducer(initialState, {
            type: "DELETE_TASK",
            boardIndex: 0,
            taskIndex: 0
        });
        chai.assert.notEqual(newState.getIn(['boardList', 0, 'taskList', 0, 'id']), initialState.getIn(['boardList', 0, 'taskList', 0, 'id']));
        chai.assert.equal(newState.get("expandedTask").size, 0)
    });

    it('should delete task', () => {
        let newState = rootReducer(initialState, {
            type: "DELETE_TASK",
            boardIndex: 0,
            taskIndex: 0
        });
        chai.assert.notEqual(newState.getIn(['boardList', 0, 'taskList', 0, 'id']), initialState.getIn(['boardList', 0, 'taskList', 0, 'id']));
        chai.assert.equal(newState.get("expandedTask").size, 0)
    });

    it('should save task', () => {
        let newState = rootReducer(initialState, {
            type: "EXPAND_TASK",
            boardIndex: 0,
            taskIndex: 0
        });
        console.log(newState.toJS().expandedTask.boardIndex)
        newState = rootReducer(newState, {
            type: "SAVE_TASK",
            updatedInfo: {
                title: "new task",
                due_date: new Date(),
                estimatedTime: 1,
                description: "requirement analysis and designing"
            }
        });
        chai.assert.equal(newState.getIn(['boardList', 0, 'taskList', 0, 'title']), "new task");
        chai.assert.equal(newState.getIn(['boardList', 0, 'taskList', 0, 'estimatedTime']), 1);
        chai.assert.equal(newState.getIn(['boardList', 0, 'taskList', 0, 'description']), "requirement analysis and designing");
    });

    it('should return default state', () => {
        let newState = rootReducer(initialState, {
            type: "DEFAULT"
        });
        chai.assert.equal(newState, initialState);
    });
});