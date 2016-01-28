import {Injectable} from "angular2/core";
import Board from "./../../pojos/board.class.ts";
import Task from "./../../pojos/task.class.ts";
import * as Immutable from "immutable";

@Injectable()
export class TaskService {
    boards:Immutable.List<Board>;
    showRightPanel:boolean;
    showFooter:boolean;
    lastTime:Date;
    startedTask:{
        boardIndex: number,
        taskIndex: number,
        taskText: string,
        elapsedTime: number,
        estimatedTime: number,
        elapsedTimeInString: string,
        estimatedTimeInString: string,
        progressStyle: {width: string},
        playing: boolean
    };

    constructor() {
        this.showRightPanel = false;
        this.showFooter = false;

        this.boards = Immutable.List<Board>([
            new Board("Design")
        ]);

        //this.lastTime = new Date();

        this.startedTask = {
            boardIndex: -1,
            taskIndex: -1,
            taskText: "",
            elapsedTime: 0,
            estimatedTime: 0,
            elapsedTimeInString: "",
            estimatedTimeInString: "0",
            progressStyle: {width: "0%"},
            playing: false
        };

        setInterval(() => {
            var currentTime = new Date();
            //if (currentTime > (this.lastTime + 2000 * 2)) {
            //}
            //this.lastTime = currentTime;
            console.log("this.startedTask", this.startedTask.taskIndex);
            if (this.startedTask.playing) {
                this.startedTask.elapsedTime += 1000;
                //console.log("this.startedTask.elapsedTime", this.startedTask.elapsedTime/ 30000);
                if ((this.startedTask.elapsedTime % 30000) < 1) {
                    console.log("30 secs");
                    this.boards = this.boards.updateIn([this.startedTask.boardIndex, 'tasks', this.startedTask.taskIndex],
                        (task) => (new Task(task.text, task.estimatedTime, this.startedTask.elapsedTime, task.completed)));
                }

                this.startedTask.elapsedTimeInString = this.parseMillisecondsIntoReadableTime(this.startedTask.elapsedTime);
                this.startedTask.progressStyle = this.getProgress(this.startedTask.elapsedTime, this.startedTask.estimatedTime);
            }
        }, 1000);
    }

    addTask(boardIndex:number, taskText:string = "") {
        this.boards = this.boards.updateIn([boardIndex, "tasks"], (tasks) => tasks.push(new Task(taskText)));
    }

    addBoard() {
        this.boards = this.boards.push(new Board());
        //console.log("updated boards", this.boards.toJS());
    }

    toggleTask(boardIndex:number, taskIndex:number) {
        this.boards = this.boards.updateIn([boardIndex, 'tasks', taskIndex],
            (task) => (new Task(task.text, task.estimatedTime, task.elapsedTime, !task.completed)));
    }

    startResumePauseTask(boardIndex:number, taskIndex:number) {
        let newTask:Task;

        if (this.startedTask.taskIndex === -1) {
            console.log("no task has been started, start task");
            //no task has been started, start task
            this.boards = this.boards.updateIn([boardIndex, 'tasks', taskIndex],
                (task) => {
                    newTask = new Task(task.text, task.estimatedTime, 0, task.completed);
                    return newTask;
                });

            this.startedTask = {
                boardIndex: boardIndex,
                taskIndex: taskIndex,
                taskText: newTask.text,
                elapsedTime: newTask.elapsedTime,
                estimatedTime: newTask.estimatedTime,
                elapsedTimeInString: this.parseMillisecondsIntoReadableTime(newTask.elapsedTime),
                estimatedTimeInString: this.parseMillisecondsIntoReadableTime(newTask.estimatedTime),
                progressStyle: this.getProgress(newTask.elapsedTime, newTask.estimatedTime),
                playing: true
            };
        }
        else if (this.startedTask.boardIndex === boardIndex && this.startedTask.taskIndex === taskIndex) {
            //task stopped
            //update the task
            console.log("task stopped,update the task ");
            this.boards = this.boards.updateIn([boardIndex, 'tasks', taskIndex],
                (task) => {
                    newTask = new Task(task.text, task.estimatedTime, 0, task.completed);
                    return newTask;
                });

            this.startedTask = {
                boardIndex: -1,
                taskIndex: -1,
                taskText: "",
                elapsedTime: 0,
                estimatedTime: 0,
                elapsedTimeInString: "",
                estimatedTimeInString: "0",
                progressStyle: {width: "0%"},
                playing: false
            };

        }
        else {
            //task stopped
            //another task started
            console.log("task stopped, another task started");
            this.boards = this.boards.updateIn([boardIndex, 'tasks', taskIndex],
                (task) => {
                    newTask = new Task(task.text, task.estimatedTime, 0, task.completed);
                    return newTask;
                });

            this.startedTask = {
                boardIndex: boardIndex,
                taskIndex: taskIndex,
                taskText: newTask.text,
                elapsedTime: newTask.elapsedTime,
                estimatedTime: newTask.estimatedTime,
                elapsedTimeInString: this.parseMillisecondsIntoReadableTime(newTask.elapsedTime),
                estimatedTimeInString: this.parseMillisecondsIntoReadableTime(newTask.estimatedTime),
                progressStyle: this.getProgress(newTask.elapsedTime, newTask.estimatedTime),
                playing: false
            };
        }


        this.showFooter = true;
    }

    toggleRightPanel() {
        this.showRightPanel = !this.showRightPanel;
    }

    parseMillisecondsIntoReadableTime(milliseconds:number, withoutSeconds:boolean = false):string {
        //Get hours from milliseconds
        let hours:number = milliseconds / (1000 * 60 * 60);
        let absoluteHours:number = Math.floor(hours);
        let h:number|string = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        //Get remainder from hours and convert to minutes
        let minutes:number = (hours - absoluteHours) * 60;
        let absoluteMinutes:number = Math.floor(minutes);
        let m:number|string = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

        if (withoutSeconds) {
            return h + ':' + m;
        }

        else {
            //Get remainder from minutes and convert to seconds
            let seconds:number = (minutes - absoluteMinutes) * 60;
            let absoluteSeconds:number = Math.floor(seconds);
            let s:number|string = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

            return h + ':' + m + ':' + s;
        }
    }

    private getProgress(elapsedTime:number, estimatedTime:number) {
        let progress = (elapsedTime / estimatedTime) * 100;
        return {width: `${progress}%`};
    }
}