/// <reference path="../typings/chai/chai.d.ts" />
// /<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

import * as Actions from "../src/actions";
import chai = require('chai');

describe('Actions', () => {
    it('should do add board action', () => {
        chai.assert.equal(Actions.addBoard().type, "ADD_BOARD")
    });

    it('should do save board action', () => {
        chai.assert.equal(Actions.saveBoard().type, "SAVE_BOARD")
    });

    it('should do get board action', () => {
        chai.assert.equal(Actions.getBoard().type, "GET_BOARD")
    });

    it('should do rename board action', () => {
        chai.assert.equal(Actions.renameBoard().type, "RENAME_BOARD")
    });

    it('should do delete board action', () => {
        chai.assert.equal(Actions.deleteBoard().type, "DELETE_BOARD")
    });

    it('should do add task action', () => {
        chai.assert.equal(Actions.addTask().type, "ADD_TASK")
    });

    it('should do complete task action', () => {
        chai.assert.equal(Actions.taskCompleted().type, "TASK_COMPLETED")
    });

    it('should do play task action', () => {
        chai.assert.equal(Actions.playTask().type, "PLAY_TASK")
    });

    it('should do pause task action', () => {
        chai.assert.equal(Actions.pauseTask().type, "PAUSE_TASK")
    });

    it('should do expand task action', () => {
        chai.assert.equal(Actions.expandTask().type, "EXPAND_TASK")
    });

    it('should do hide task action', () => {
        chai.assert.equal(Actions.hideTask().type, "HIDE_TASK")
    });

    it('should do delete task action', () => {
        chai.assert.equal(Actions.deleteTask().type, "DELETE_TASK")
    });

    it('should do edit task title action', () => {
        chai.assert.equal(Actions.saveTask().type, "SAVE_TASK")
    });

    it('should do search task action', () => {
        chai.assert.equal(Actions.searchTask().type, "SEARCH_TASK")
    });

});