import {Injectable} from "angular2/core";
import * as Immutable from "immutable";

const TaskRecord = Immutable.Record({
    text: "",
    estimatedTime: "",
    completed: false
});

export default class Task extends TaskRecord {
    text: string;
    completed:boolean;
    estimatedTime: string;

    constructor(text:string, estimatedTime:string = "00:00", completed:boolean = false) {
        super({text: text, estimatedTime: estimatedTime, completed: completed});
    }
}