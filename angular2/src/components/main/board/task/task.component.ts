import {Component, Input, Output, EventEmitter} from "angular2/core";
import {TaskService} from "../../task.service.ts";
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'task',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./src/components/main/board/task/task.css'],
    template: `
        <input type="checkbox"
            class="fleft task-body-list__item__checkbox"
            [ngModel]="task.completed"
            (click)="toggleTask()"/>

        <label class="task-body-list__item__label fleft "
            [ngClass]="{'strike-text': task.completed}">

            <span class="task-body-list__item__label__text">
                Create designs for insight screen
            </span>

        </label>

        <a *ngIf="!task.completed"
            href="javascript:void(0)"
            class="play-ico flaticon-play128 fright">
        </a>

        <span class="task-time-left fright">
            1:15:00
        </span>`
})

export class TaskComponent {
    @Input() task;
    @Input() boardIndex;
    @Input() index;

    constructor(public taskService:TaskService) {
        console.log("TaskComponent constructor");
    }

    toggleTask(){
        console.log("boardIndex", this.boardIndex, this.index);
        this.taskService.toggleTask(this.boardIndex, this.index);
    }

}
