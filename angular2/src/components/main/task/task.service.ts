import {Injectable} from "angular2/core";
import Board from "./board.class.ts";
import Task from "./task.class.ts";

@Injectable()
export class TaskService {
    boards:Board[] = [new Board("Design")];

    constructor() {
    }

    addTask(boardIndex:number, task:string = "task text not entered") {
        console.log("addTask called");
        //this.boards = [this.boards.splice(0, boardIndex),
        //    this.boards[boardIndex].tasks.push(task),
        //    this.boards.splice(boardIndex + 1, this.boards.length)];
        this.boards[boardIndex].tasks.push(task);
        console.log("boards", this.boards);
    }
}