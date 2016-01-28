/**
 * Created by dixy on 28/1/16.
 */
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

describe("Board Reducer", () => {
    it('should add board', () => {
        let newState = rootReducer(initialState, {
            type: "ADD_BOARD"
        });
        chai.assert.equal(initialState.get('boardList').size + 1, newState.get('boardList').size)
    });

    it('should rename board', () => {
        let newState = rootReducer(initialState, {
            type: "RENAME_BOARD",
            boardIndex: 0,
            newTitle: "new board"
        });
        chai.assert.equal(newState.getIn(['boardList', 0, 'title']), "new board")
    });

    it('should delete board', () => {
        let newState = rootReducer(initialState, {
            type: "DELETE_BOARD",
            boardIndex: 0
        });
        chai.assert.notEqual(initialState.getIn(['boardList', 0]), newState.getIn(['boardList', 0]))
    });
});