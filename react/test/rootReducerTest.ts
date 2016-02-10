/**
 * Created by dixy on 4/2/16.
 */
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path='../typings/immutable/immutable.d.ts'/>
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

describe("Root Reducer", () => {
    it('should search task', () => {
        let newState = rootReducer(initialState, {
            type: "SEARCH_TASK",
            searchText: "new"
        });
        chai.assert.equal(newState.get("searchText"), "new")
    });
});