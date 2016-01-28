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

describe("Reducer", () => {
    it('should add board', () => {
        let newState = rootReducer(initialState, {
            type: "ADD_BOARD"
        });
        chai.assert.equal(initialState.get('boardList').size + 1, newState.get('boardList').size)
    });

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
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']), true)
    });

    it('should pause task', () => {
        let newState = rootReducer(initialState, {
            type: "PAUSE_TASK",
            boardId: 0,
            taskId: 0,
            progress: 10
        });
        chai.assert.equal(newState.getIn(["boardList", 0, "taskList", 0, 'isPlaying']), false);
        chai.assert.isAbove(newState.getIn(["boardList", 0, "taskList", 0, 'progress']), initialState.getIn(["boardList", 0, "taskList", 0, 'progress']))
    });
});