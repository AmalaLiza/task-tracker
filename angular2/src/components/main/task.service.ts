import {Injectable} from "angular2/core";
import Board from "./board/board.class.ts";
import Task from "./board/task/task.class.ts";
import * as Immutable from "immutable";

@Injectable()
export class TaskService {
    boards:Immutable.List<Board>;
    constructor() {
        this.boards = Immutable.fromJS([new Board("Design")]);
    }

    addTask(boardIndex:number, task:string = "task text not entered") {
        console.log("addTask called");
        this.boards.get(boardIndex).tasks.push(task);
        console.log("new boards", this.boards.toJS());
        this.boards.set(boardIndex, this.boards.get(boardIndex));
    }
}