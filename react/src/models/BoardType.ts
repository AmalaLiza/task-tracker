"use strict";

import * as Immutable from 'immutable';
import TaskType from "./TaskType";

const BoardRecord = Immutable.Record({
    id: -1,
    title: "",
    taskList: []
});

export default class BoardType extends BoardRecord {
    id:number;
    title:string;
    taskList:Immutable.List<TaskType>;

    constructor(props) {
        super(props)
    }
}