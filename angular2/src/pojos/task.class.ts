import {Injectable} from "angular2/core";
import * as Immutable from "immutable";

const TaskRecord = Immutable.Record({
    text: "",
    estimatedTime: 0,
    elapsedTime: 0,
    completed: false,
    playing: false
});

export default class Task extends TaskRecord {
    text: string;
    completed:boolean;
    elapsedTime:number;
    estimatedTime: number;

    constructor(text, estimatedTime = 160000, elapsedTime = 0, completed = false) {
        super({text: text, estimatedTime: estimatedTime, elapsedTime: elapsedTime, completed: completed});
    }
}