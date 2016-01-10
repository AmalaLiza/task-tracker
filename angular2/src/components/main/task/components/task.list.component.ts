/// <reference path="../task.service.ts" />

import {Component} from "angular2/core";
import {TaskService} from "../task.service";

@Component({
    selector: 'task-list',
    template: `<div class="task-body">
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

            <li class="task-body-list__item clearfix">
                <label class="task-body-list__item__label fleft">
                    <input type="checkbox"/>

                    <span class="task-body-list__item__label__text">
                        Create designs for insight screen
                    </span>
                </label>
                <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                <span class="task-time-left fright">
                    1:15:00
                </span>
            </li>

            <li class="task-body-list__item clearfix">
                <label class="task-body-list__item__label fleft">
                    <input type="checkbox">
                    <span class="task-body-list__item__label__text">
                        Create designs for insight screen
                        </span>
                </label>

                <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                <span class="task-time-left fright">
                    1:15:00
                </span>
            </li>

            <li class="task-body-list__item clearfix">
                 <label class="task-body-list__item__label fleft">
                    <input type="checkbox">
                    <span class="task-body-list__item__label__text">
                        Create designs for insight screen
                    </span>
                 </label>

                 <a href="javascript:void(0)" class="play-ico fright display-none"></a>
                 <span class="task-time-left fright">
                    1:15:00
                 </span>
            </li>
        </ul>
    </div>`
})

export class TaskListComponent{
    taskService: TaskService;
    constructor() {
    }
}