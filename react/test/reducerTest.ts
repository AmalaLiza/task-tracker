/// <reference path="../typings/chai/chai.d.ts" />
///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
import {rootReducer} from "../src/reducers";
import chai = require('chai');

const initialState:BoardListType = Immutable.fromJS({
    boardList: [{
        id: 0,
        title: "Design1",
        taskList: [{
            id: 0,
            title: "Add task",
            estimatedTime: "2 hrs",
            completed: false
        }]
    }, {
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

describe("Reducer", () => {
    it('should add board', () => {
        let newState = rootReducer(initialState, {
            type: "ADD_BOARD"
        })
        chai.assert.equal(initialState.get('boardList').size + 1, newState.get('boardList').size)
    })

    it('should add task', () => {
        let newState = rootReducer(initialState, {
            type: "ADD_TASK",
            title: "new task",
            boardIndex: 0
        })
        chai.assert.equal(initialState.getIn(["boardList", 0, "taskList"]).size + 1, newState.get("boardList", 0, "taskList").size)
    })

    it('should complete task', () => {
        let newState = rootReducer(initialState, {
            type: "TASK_COMPLETED",
            boardIndex: 0,
            taskId: 1
        })
        chai.assert.equal(initialState.getIn(["boardList", 0, "taskList", 0]).get('completed'), true)
    })
})