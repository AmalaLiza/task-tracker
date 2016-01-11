import {Component, Input, Output, EventEmitter} from "angular2/core";
import {TaskService} from "../task.service.ts";
import {TaskComponent} from "./task/task.component.ts";

@Component({
    selector: 'board',
    directives: [TaskComponent],
    styleUrls: ['./src/components/main/main.css'],
    template: `
    <div class="task-list__item fleft">
        <div class="task-header-wrapper">
            <h2 class="task-header align-center">
                {{title}}<span class="task-no"> ({{tasks.size}})</span>
            </h2>
        </div>

        <div class="task-body">

            <ul class="task-body-list">
                <li class="task-body-list__item clearfix">
                    <label class="task-body-list__item__label fleft">
                        <input type="checkbox"/>
                        <span class="task-body-list__item__label__text">
                            Create designs for insight screen
                        </span>
                    </label>

                    <a href="javascript:void(0)" class="play-ico fright"></a>
                    <span class="task-time-left fright display-none">
                        1:15:00
                    </span>
                 </li>

                <li class="task-body-list__item clearfix"
                    *ngFor="#task of tasks">
                    <task [task]="task"></task>
                </li>
            </ul>
        </div>

        <div class="task-footer">
            <a href="javascript:void(0)"
                class="primary-link add-task-link"
                (click)="addTask.emit()">
                + Add Task
            </a>
        </div>
    </div>`
})

export class BoardComponent {
    @Input() title;
    @Input() tasks;
    @Output() addTask = new EventEmitter();
}