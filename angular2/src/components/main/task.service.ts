import {Injectable} from "angular2/core";
import Board from "./../../pojos/board.class.ts";
import Task from "./../../pojos/task.class.ts";
import * as Immutable from "immutable";

@Injectable()
export class TaskService {
    boards:Immutable.List<Immutable.Map<string, any>>;

    constructor() {
        this.boards = Immutable.fromJS([{
            title: "Design",
            tasks: [{text: "eat", time: "00:30"}, {text: "code", time: "08:00"}, {text: "sleep", time: "08:00"}]
        }]);
    }

    addTask(boardIndex:number, task:string = "") {
        console.log("addTask called");
        this.boards = this.boards.updateIn([boardIndex, "tasks"], (tasks) => tasks.push(Immutable.Map({
            text: task,
            time: "00:00"
        })));
        console.log("new boards", this.boards.toJS());
    }

    addBoard() {
        this.boards = this.boards.push(Immutable.fromJS({
            title: "Design",
            tasks: [{text: "eat", time: "00:30"}, {text: "code", time: "08:00"}, {text: "sleep", time: "08:00"}]
        }));

        console.log("updated boards", this.boards.toJS());
    }
}