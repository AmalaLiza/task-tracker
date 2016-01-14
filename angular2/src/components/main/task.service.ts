import {Injectable} from "angular2/core";
import Board from "./../../pojos/board.class.ts";
import Task from "./../../pojos/task.class.ts";
import * as Immutable from "immutable";

@Injectable()
export class TaskService {
    boards:Immutable.List<Board>;

    constructor() {
        this.boards = Immutable.List<Board>([
            new Board("Design")
        ]);
    }

    addTask(boardIndex:number, taskText:string = "") {
        this.boards = this.boards.updateIn([boardIndex, "tasks"], (tasks) => tasks.push(new Task(taskText)));
    }

    addBoard() {
        this.boards = this.boards.push(new Board());
        //console.log("updated boards", this.boards.toJS());
    }

    toggleTask(boardIndex:number, taskIndex:number) {
        //console.log("toggle",boardIndex, taskIndex,  this.boards.getIn([boardIndex, 'tasks', taskIndex]));
        this.boards = this.boards.updateIn([boardIndex, 'tasks', taskIndex], (task) => (new Task(task.text, task.estimatedTime, !task.completed)));
    }
}