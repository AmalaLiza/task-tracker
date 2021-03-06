import {Component, Input, Output, EventEmitter} from "angular2/core";
import {TaskService} from "../task.service";
import {TaskComponent} from "./task/task.component";
import {ViewEncapsulation} from 'angular2/core';
import TaskCompletedPipe from '../../../pipes/task-completed.pipe';

@Component({
    selector: 'board',
    directives: [TaskComponent],
    pipes: [TaskCompletedPipe],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./src/components/main/board/board.css'],
    template: `
    <div class="task-list__item fleft">
        <div class="task-header-wrapper">
            <h2 class="task-header align-center">
                {{title}}<span class="task-no"> ({{tasks.size}})</span>
            </h2>
        </div>

        <div class="task-body">

            <ul class="task-body-list">
                <li class="task-body-list__item clearfix"
                    *ngFor="#task of tasks| taskCompletedPipe : false">
                    <task [task]="task"
                          [boardIndex]="index"
                          [index]="tasks.indexOf(task)">
                    </task>
                </li>
            </ul>

            <div class="task-body__sub-head clearfix">
                <span class="fleft">COMPLETED TASKS(1)</span>
                <a href="javascript:void(0)"
                    class="fright primary-link bold-text"
                    (click)="toggleCompletedTasks()">
                    {{(showCompletedTasks)? 'Hide' : 'Show'}}
                </a>
            </div>

           <ul *ngIf = "showCompletedTasks" class="task-body-list">
                <li class="task-body-list__item clearfix"
                    *ngFor="#task of tasks| taskCompletedPipe : true">
                    <task [task]="task"
                          [boardIndex]="index"
                          [index]="tasks.indexOf(task)">
                     </task>
                </li>
            </ul>

        </div>

        <div class="task-footer">
            <a href="javascript:void(0)"
                class="primary-link add-task-link"
                (click)="addTask()">
                + Add Task
            </a>
        </div>
    </div>`
})

export class BoardComponent {
    @Input() title;
    @Input() tasks;
    @Input() index;
    showCompletedTasks:boolean;

    constructor(public taskService:TaskService) {
        console.log("BoardComponent constructor");
        this.showCompletedTasks = true;
    }

    addTask() {
        this.taskService.addTask(this.index, 'new task');
    }

    toggleCompletedTasks() {
        this.showCompletedTasks = !this.showCompletedTasks;
    }

}