"use strict";

import * as Immutable from 'immutable';
import BoardType from "./BoardType";
import TaskType from "./TaskType";

const StateRecord = Immutable.Record({
    boardList: [],
    searchText: "",
    activeTask: {},
    expandedTask: {},
});

export default class StateType extends StateRecord {
    boardList:Immutable.List<BoardType>;
    searchText:string;
    activeTask:TaskType;
    expandedTask:TaskType;

    constructor(props) {
        super(props)
    }
}