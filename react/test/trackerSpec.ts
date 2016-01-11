/// <reference path="../typings/chai/chai.d.ts" />

import Actions from "../src/actions";
//import {Chai} from "chai";
import chai = require('chai');

describe('Actions', () => {
    it('should add board', () => {
        chai.assert.equal(Actions.addBoard().type, "ADD_BOARD")
    })

    it('should add task', () => {
        chai.assert.equal(Actions.addTask().type, "ADD_TASK")
    })

    it('should add board', () => {
        chai.assert.equal(Actions.addBoard().type, "ADD_BOARD")
    })

    it('should add task', () => {
        chai.assert.equal(Actions.addTask().type, "ADD_TASK")
    })
})