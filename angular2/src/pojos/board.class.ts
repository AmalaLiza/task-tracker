import Task from "./task.class.ts";
import * as Immutable from "immutable";

const BoardRecord = Immutable.Record({
    title: "",
    tasks: []
});

export default class Board extends BoardRecord {
    title:string;
    tasks: Immutable.List<Task>;

    constructor(title:string = "", tasks:Immutable.List<Task> = Immutable.List<Task>([])) {
        super({title: title, tasks: tasks});
    }

}