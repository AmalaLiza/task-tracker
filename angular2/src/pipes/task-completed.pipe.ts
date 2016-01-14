import {Pipe} from "angular2/core";
import "./../pojos/task.class.ts";
import Task from "../pojos/task.class";
import * as Immutable from "immutable";

@Pipe({
    name: "taskCompletedPipe"
})

export default class TaskCompletedPipe {
    transform(tasks:Immutable.List<Task>, [status]) {
        return tasks.filter((task)=> task.completed === status);
    }
}