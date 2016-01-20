"use strict";
import * as Immutable from 'immutable';

const TaskRecord = Immutable.Record({
    id: -1,
    title: "",
    completed: false,
    estimatedTime: 0,
    description: "",
    priority: 0,
    progress: "",
    due_date: "",
    dependencies: "",
    notes: "",
    activity: "",
    createdAt: "",
    isPlaying: "",
    isExpanded: false
});

export default class TaskType extends TaskRecord {
    id:number;
    title:string;
    completed:Boolean;
    estimatedTime:number;
    description:string;
    priority:number;
    progress:string;
    due_date:string;
    dependencies:string;
    notes:string;
    activity:string;
    createdAt:Date;
    isPlaying:Boolean;
    isExpanded:Boolean;

    constructor(id:number, title:string, completed:Boolean, estimatedTime:number, description:string, priority:number, progress:string,
                due_date:string, dependencies:string, notes:string, activity:string, createdAt:Date, isPlaying:Boolean, isExpanded:Boolean) {

        super({id, title, completed, estimatedTime, description, priority, progress, due_date, dependencies,
            notes, activity, createdAt, isPlaying, isExpanded});
    }
}